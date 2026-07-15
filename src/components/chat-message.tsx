'use client';

import React from 'react';
import { ChatMessage as ChatMessageType } from '@/hooks/use-chat';
import { User, Sparkles } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  // Basic regex-based parser to render headers, bold text, bullets, and line-breaks bilingually
  const parseMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      let content: React.ReactNode = line;

      // Headers mapping (e.g. ### header)
      if (line.startsWith('### ')) {
        return (
          <h4 key={index} className={`text-xs md:text-sm font-extrabold mt-3 mb-1 ${isUser ? 'text-white' : 'text-kitchen-charcoal'}`}>
            {line.substring(4)}
          </h4>
        );
      }
      if (line.startsWith('#### ')) {
        return (
          <h5 key={index} className={`text-[11px] md:text-xs font-bold mt-2 mb-1 ${isUser ? 'text-white/90' : 'text-kitchen-charcoal/90'}`}>
            {line.substring(5)}
          </h5>
        );
      }

      // Bullets mapping
      let isBullet = false;
      if (line.startsWith('* ') || line.startsWith('- ')) {
        content = line.substring(2);
        isBullet = true;
      }

      // Bold text mapping (e.g. **bold**)
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      const strContent = typeof content === 'string' ? content : '';
      if (strContent) {
        while ((match = boldRegex.exec(strContent)) !== null) {
          if (match.index > lastIndex) {
            parts.push(strContent.substring(lastIndex, match.index));
          }
          parts.push(
            <strong key={match.index} className={`font-extrabold ${isUser ? 'text-white' : 'text-kitchen-charcoal'}`}>
              {match[1]}
            </strong>
          );
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < strContent.length) {
          parts.push(strContent.substring(lastIndex));
        }
        content = parts.length > 0 ? parts : content;
      }

      if (isBullet) {
        return (
          <li key={index} className="list-disc list-inside ml-2 text-xs md:text-sm leading-relaxed mb-0.5 font-normal">
            {content}
          </li>
        );
      }

      return (
        <p key={index} className="text-xs md:text-sm leading-relaxed min-h-[1.1rem] mb-1 font-normal">
          {content}
        </p>
      );
    });
  };

  return (
    <div className={`flex gap-3 max-w-[85%] ${isUser ? 'self-end flex-row-reverse' : 'self-start'}`}>
      <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${
        isUser 
          ? 'bg-kitchen-clay/10 border-kitchen-clay/20 text-kitchen-clay' 
          : 'bg-kitchen-cream/20 border-kitchen-clay/15 text-kitchen-clay'
      }`} aria-hidden="true">
        {isUser ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
      </div>
      
      <div className={`p-4 rounded-lg border shadow-xs ${
        isUser 
          ? 'bg-kitchen-clay text-white border-kitchen-clay/85 rounded-tr-none' 
          : 'bg-kitchen-cream/10 text-kitchen-charcoal border-border rounded-tl-none'
      }`}>
        {parseMarkdown(message.content)}
      </div>
    </div>
  );
};
