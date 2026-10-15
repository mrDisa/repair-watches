# remont-chasov-stavropol.ru

Статический сайт на Astro без форм и бэкенда: связь только по телефону и WhatsApp.

```
npm install
npm run dev      # разработка, http://localhost:4321
npm run build    # сборка в dist/
```

- Контакты и цены-заглушки — `src/data/site.ts`
- Услуги и их тексты — `src/data/services.ts`
- Общий каркас, SEO, разметка — `src/layouts/Base.astro`, `src/lib/schema.ts`
