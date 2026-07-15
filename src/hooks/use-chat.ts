'use client';

import { useState, useEffect, useCallback } from 'react';
import { AIContext } from '@/lib/ai-context';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync state from localStorage after mount safely
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dailymeal_chat_history');
      let loadedHistory: ChatMessage[] = [];
      if (saved) {
        try {
          loadedHistory = JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse chat history from localStorage', e);
        }
      }

      const timer = setTimeout(() => {
        setMessages(loadedHistory);
        setIsLoaded(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  const sendMessage = useCallback(
    async (text: string, context: AIContext, language: string) => {
      if (!text.trim()) return;

      setError(null);
      setIsLoading(true);

      const userMessage: ChatMessage = { role: 'user', content: text.trim() };
      const updatedMessages = [...messages, userMessage];

      // Update state with user message immediately
      setMessages(updatedMessages);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: updatedMessages,
            context,
            language,
          }),
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || 'Server error occurred');
        }

        const data = await response.json();
        const assistantMessage: ChatMessage = { role: 'assistant', content: data.reply };

        const finalMessages = [...updatedMessages, assistantMessage];
        setMessages(finalMessages);

        if (typeof window !== 'undefined') {
          localStorage.setItem('dailymeal_chat_history', JSON.stringify(finalMessages));
        }
      } catch (err) {
        console.error('Failed to send message:', err);
        const message = err instanceof Error ? err.message : 'Failed to send message';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  const clearHistory = useCallback(() => {
    setMessages([]);
    setError(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('dailymeal_chat_history');
    }
  }, []);

  return {
    messages,
    isLoaded,
    isLoading,
    error,
    sendMessage,
    clearHistory,
  };
};
