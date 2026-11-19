import { NextRequest, NextResponse } from 'next/server';
import { createSong, listSongs } from '@/lib/songs';
export async function GET(request: NextRequest) { return NextResponse.json({ data: listSongs(request.nextUrl.searchParams.get('q') ?? ''), source: 'church-library', harpa: 'Use /api/harpa/{numero} para carregar um hino da Harpa Cristã.' }); }
export async function POST(request: NextRequest) { const body = await request.json(); if (!body.title || !body.lyrics) return NextResponse.json({ error: 'title and lyrics are required' }, { status: 400 }); return NextResponse.json({ data: createSong({ title: body.title, artist: body.artist, lyrics: body.lyrics, license: body.license }) }, { status: 201 }); }
