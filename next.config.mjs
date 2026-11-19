/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, async headers() { return [{ source: '/api/:path*', headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }, { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' }, { key: 'Access-Control-Allow-Headers', value: 'Content-Type' }] }]; }, async rewrites() { return [{ source: '/painel', destination: '/controle/index.html' }, { source: '/telao', destination: '/controle/stage.html' }, { source: '/controle', destination: '/controle/index.html' }]; } };
export default nextConfig;
