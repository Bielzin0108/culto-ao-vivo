# Culto ao Vivo — Next.js

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000 para o painel publicado pelo Next.js. O painel de controle completo fica em `/controle/index.html` e o telão em `/controle/stage.html`.

## API da Bíblia

Crie `.env.local` a partir de `.env.example` e informe `BIBLE_API_KEY` e `BIBLE_ID`. Sem essas variáveis, a rota usa três versículos de demonstração. A chave deve ficar somente no servidor.

## Rotas

- `GET /api/bible/books`
- `GET /api/bible/search?q=...`
- `GET /api/bible/passages/{passageId}`
- `GET /api/songs?q=...`
- `GET /api/harpa/{numero}` (proxy do hino escolhido, de 1 a 640)

A rota da Harpa consulta a API pública indicada em https://www.harpacrista.org/ (`api.harpacrista.org`) somente quando o operador escolhe um número. O projeto não replica o banco inteiro; isso mantém os dados atualizados e respeita a fonte original.
- `POST /api/songs` com `{ "title", "lyrics", "artist", "license" }`
- `GET /api/texts`
- `POST /api/texts` com `{ "type", "text", "reference", "font", "model" }`

O armazenamento de músicas e texto é temporário em memória para o MVP. Antes da publicação, trocar `lib/songs.ts` e `lib/presentation.ts` por PostgreSQL/Neon, Supabase ou outro banco compatível com Vercel.
