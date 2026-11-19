export type Song = { id: string; title: string; artist?: string; lyrics: string; license?: string };
let songs: Song[] = [
  { id: 'demo-1', title: 'Meu louvor', artist: 'Repertório da igreja', lyrics: 'Cadastre aqui uma letra própria, autorizada ou licenciada.', license: 'A confirmar' }
];
export function listSongs(query = '') { const q = query.toLowerCase(); return songs.filter(s => `${s.title} ${s.artist ?? ''} ${s.lyrics}`.toLowerCase().includes(q)); }
export function createSong(input: Omit<Song, 'id'>) { const song = { ...input, id: crypto.randomUUID() }; songs = [song, ...songs]; return song; }
export function getSong(id: string) { return songs.find(s => s.id === id); }
