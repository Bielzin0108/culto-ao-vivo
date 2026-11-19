import { NextRequest, NextResponse } from 'next/server';
import { demoBible, searchBible } from '@/lib/bible';
export async function GET(request: NextRequest) { const query = request.nextUrl.searchParams.get('q')?.trim() ?? ''; if (!query) return NextResponse.json({ data: demoBible(), provider: 'demo' }); try { return NextResponse.json({ data: await searchBible(query), provider: process.env.BIBLE_API_KEY ? 'api.bible' : 'demo' }); } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Bible provider unavailable' }, { status: 502 }); } }
