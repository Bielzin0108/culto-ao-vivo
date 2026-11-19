import { NextResponse } from 'next/server';

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  if (!/^\d{1,3}$/.test(id) || Number(id) < 1 || Number(id) > 640) return NextResponse.json({ error: 'Hino inválido. Use um número entre 1 e 640.' }, { status: 400 });
  const response = await fetch(`https://api.harpacrista.org/${id}`, { next: { revalidate: 86400 } });
  if (!response.ok) return NextResponse.json({ error: 'Hino não encontrado na fonte da Harpa Cristã.' }, { status: response.status });
  return NextResponse.json(await response.json(), { headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800' } });
}
