// Конвертирует исходные JPG в WebP для public/img: node tools/photos.mjs <папка-с-jpg>
import sharp from 'sharp';
const src = process.argv[2];
const map = { vintage: 'hero', quartz: 'svc-quartz', mech: 'svc-mechanical', clean: 'svc-cleaning', swiss: 'svc-swiss', hero: 'svc-vintage', cuckoo: 'svc-cuckoo' };
for (const [from, to] of Object.entries(map)) {
  await sharp(`${src}/${from}.jpg`).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 76 }).toFile(`public/img/${to}.webp`);
}
