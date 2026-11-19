import { NextRequest, NextResponse } from 'next/server';
import { demoBible } from '@/lib/bible';

export async function GET(_request: NextRequest, context: { params: Promise<{ passageId: string }> }) {
  const { passageId } = await context.params;
  const key = process.env.BIBLE_API_KEY;
  const bibleId = process.env.BIBLE_ID;
  if (!key || !bibleId) {
    const verse = demoBible().find(item => item.id === passageId.toLowerCase().replaceAll(':', '-'));
    return NextResponse.json({ data: verse ?? null, provider: 'demo' }, { status: verse ? 200 : 404 });
  }
  const response = await fetch(`https://rest.api.bible/v1/bibles/${bibleId}/passages/${encodeURIComponent(passageId)}?content-type=text&include-notes=false`, { headers: { 'api-key': key }, next: { revalidate: 300 } });
  return NextResponse.json({ ...(await response.json()), provider: 'api.bible' }, { status: response.status });
}
