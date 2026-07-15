'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '@/context/language-context';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || disabled) return;
    onSend(text);
    setText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!text.trim() || disabled) return;
      onSend(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-end font-sans">
      <div className="flex-1">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.assistant.inputPlaceholder}
          disabled={disabled}
          rows={1}
          className="w-full px-3.5 py-3 border border-border rounded-lg text-sm bg-white text-kitchen-charcoal placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-kitchen-clay/40 resize-none max-h-24 disabled:opacity-60"
        />
      </div>
      <button
        type="submit"
        disabled={!text.trim() || disabled}
        className="p-3 bg-kitchen-clay border border-kitchen-clay/90 rounded-lg text-white hover:bg-kitchen-clay/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-kitchen-clay/40 cursor-pointer"
        aria-label={t.assistant.send}
      >
        <Send className="w-4 h-4" aria-hidden="true" />
      </button>
    </form>
  );
};
