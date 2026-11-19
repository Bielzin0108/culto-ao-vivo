import { NextResponse } from 'next/server';
import { bookCatalog } from '@/lib/book-catalog';
export async function GET() { const key = process.env.BIBLE_API_KEY; const bibleId = process.env.BIBLE_ID; if (!key || !bibleId) return NextResponse.json({ data: bookCatalog.map(([id, name, chapters]) => ({ id, name, chapters })), provider: 'catalog' }); const r = await fetch(`https://rest.api.bible/v1/bibles/${bibleId}/books`, { headers: { 'api-key': key }, next: { revalidate: 86400 } }); return NextResponse.json({ ...(await r.json()), provider: 'api.bible' }, { status: r.status }); }
