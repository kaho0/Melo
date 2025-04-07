'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ChatInterface from '../../components/ChatInterface';

export default function ChatPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query');
  const category = searchParams.get('category');

  return (
    <div className="min-h-screen bg-gray-900">
      

      <ChatInterface initialQuery={initialQuery} category={category} />
    </div>
  );
} 