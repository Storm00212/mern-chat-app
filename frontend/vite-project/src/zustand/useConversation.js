// File: src/zustand/useConversation.js
import { create } from 'zustand';

export const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation}),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));