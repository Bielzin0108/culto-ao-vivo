export type Presentation = { type: 'verse' | 'song' | 'text'; text: string; reference?: string; font?: string; model?: string; updatedAt: string };
let current: Presentation = { type: 'text', text: '', updatedAt: new Date().toISOString() };
export function getPresentation() { return current; }
export function setPresentation(input: Omit<Presentation, 'updatedAt'>) { current = { ...input, updatedAt: new Date().toISOString() }; return current; }
