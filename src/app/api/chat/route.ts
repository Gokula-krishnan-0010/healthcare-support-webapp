import { NextResponse } from 'next/server';
import { generateResponse } from '@/lib/rag';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const response = generateResponse(message);

    // Simulate a bit of processing delay for a more natural feel
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ text: response });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
