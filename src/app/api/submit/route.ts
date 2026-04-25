import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, requestType, message } = body;

    // Simulate automation/AI logic
    let priority = 'MEDIUM';
    if (message.toLowerCase().includes('urgent') || message.toLowerCase().includes('emergency') || requestType === 'medical') {
      priority = 'HIGH';
    }

    const summary = `Priority: ${priority} | ${name} requested ${requestType} assistance: "${message.substring(0, 50)}${message.length > 50 ? '...' : ''}"`;

    // In a real app, you might save to a DB or send an email here
    console.log('Form Submission:', { ...body, priority, summary });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your request has been received.',
      summary,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid request data.' },
      { status: 400 }
    );
  }
}
