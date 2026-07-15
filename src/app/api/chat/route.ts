import { NextRequest, NextResponse } from 'next/server';
import { generateAIChatResponse } from '@/lib/ai-service';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, context, language } = body;

    if (!messages || !context || !language) {
      return NextResponse.json(
        { error: 'Missing required parameters: messages, context, or language' },
        { status: 400 }
      );
    }

    const reply = await generateAIChatResponse(messages, context, language);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('API Route /api/chat error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
