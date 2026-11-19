import { NextRequest, NextResponse } from 'next/server';
import { getPresentation, setPresentation } from '@/lib/presentation';
export async function GET() { return NextResponse.json({ data: getPresentation() }); }
export async function POST(request: NextRequest) { const body = await request.json(); if (!body.text) return NextResponse.json({ error: 'text is required' }, { status: 400 }); return NextResponse.json({ data: setPresentation({ type: body.type ?? 'text', text: body.text, reference: body.reference, font: body.font ?? 'Anton', model: body.model ?? 'lower-third' }) }); }
