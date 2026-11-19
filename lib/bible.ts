export type Verse = { id: string; book: string; chapter: number; verse: number; text: string; reference: string };

const demo: Verse[] = [
  { id: 'jo-3-16', book: 'João', chapter: 3, verse: 16, text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.', reference: 'João 3:16' },
  { id: 'sl-23-1', book: 'Salmos', chapter: 23, verse: 1, text: 'O Senhor é o meu pastor; nada me faltará.', reference: 'Salmos 23:1' },
  { id: 'fp-4-13', book: 'Filipenses', chapter: 4, verse: 13, text: 'Posso todas as coisas naquele que me fortalece.', reference: 'Filipenses 4:13' }
];

export async function searchBible(query: string) {
  const key = process.env.BIBLE_API_KEY;
  const bibleId = process.env.BIBLE_ID;
  if (!key || !bibleId) return demo.filter(v => `${v.reference} ${v.text}`.toLowerCase().includes(query.toLowerCase()));
  const url = `https://rest.api.bible/v1/bibles/${bibleId}/search?query=${encodeURIComponent(query)}`;
  const response = await fetch(url, { headers: { 'api-key': key }, next: { revalidate: 300 } });
  if (!response.ok) throw new Error(`Bible provider returned ${response.status}`);
  const json = await response.json();
  return (json.data?.verses ?? []).map((v: any) => ({ id: v.id, text: v.text, reference: v.reference, book: v.bookId ?? '', chapter: 0, verse: 0 }));
}

export function demoBible() { return demo; }
