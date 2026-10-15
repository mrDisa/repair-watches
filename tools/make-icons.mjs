// Генерирует PNG-иконки и OG-картинку: node tools/make-icons.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
const fav = readFileSync('public/favicon.svg');
await sharp(fav, { density: 400 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(fav, { density: 400 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#000000"/>
<g transform="translate(830 115)" fill="none" stroke="#ffb71b" stroke-width="10" stroke-linecap="round"><circle cx="200" cy="200" r="190"/><path d="M200 70v135l80 50"/><circle cx="200" cy="200" r="10" fill="#ffb71b"/></g>
<text x="70" y="250" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="68" fill="#ffffff">Ремонт настенных</text>
<text x="70" y="335" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="68" fill="#ffffff">часов в Ставрополе</text>
<text x="70" y="410" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#a19d93">Мастер Карен · опыт 35 лет</text>
<text x="70" y="520" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="44" fill="#ffb71b">+7 928 321-37-80</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/img/og.png');
