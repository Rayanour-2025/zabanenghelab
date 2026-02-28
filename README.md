# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy (Docker Compose)

1) فایل `.env` را بسازید (یا از `.env.example` کپی کنید) و مقادیر را تنظیم کنید:

- `APP_PORT`: پورتی که روی سرور باز می‌کنید (مثلاً 3015)
- `AUTH_SECRET_KEY`: یک کلید قوی و تصادفی (حداقل 32 کاراکتر)

2) اجرا:

```bash
docker compose up -d --build
```

3) بررسی وضعیت:

```bash
docker compose ps
docker compose logs -f
```

اپ روی آدرس زیر در دسترس است:

`http://SERVER_IP:APP_PORT`

