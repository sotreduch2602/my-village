# Cấu Trúc Folder Next.js Phổ Biến Cuối Năm 2025

## Tổng Quan

Cấu trúc này sử dụng **App Router** (Next.js 13+), TypeScript, và các best practices hiện đại với **Server Components** (mặc định).

```
my-village/
├── public/                          # Static assets
│   ├── images/                      # Hình ảnh
│   ├── icons/                       # Icons
│   └── fonts/                       # Custom fonts
│
├── src/                             # Source code
│   ├── app/                         # App Router (Next.js 13+)
│   │   ├── (auth)/                  # Route group - Authentication
│   │   │   ├── login/
│   │   │   │   ├── page.tsx         # Server Component
│   │   │   │   ├── loading.tsx      # Server Component
│   │   │   │   └── layout.tsx       # Server Component
│   │   │   └── register/
│   │   │       └── page.tsx         # Server Component
│   │   │
│   │   ├── (dashboard)/             # Route group - Dashboard
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx         # Server Component
│   │   │   │   └── layout.tsx       # Server Component
│   │   │   └── profile/
│   │   │       └── page.tsx         # Server Component
│   │   │
│   │   ├── api/                     # API Routes
│   │   │   ├── auth/
│   │   │   │   └── route.ts
│   │   │   ├── users/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts
│   │   │   └── webhooks/
│   │   │       └── route.ts
│   │   │
│   │   ├── blog/                    # Dynamic routes
│   │   │   ├── [slug]/
│   │   │   │   ├── page.tsx         # Server Component
│   │   │   │   └── loading.tsx      # Server Component
│   │   │   └── page.tsx             # Server Component
│   │   │
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout (Server Component)
│   │   ├── page.tsx                 # Home page (Server Component)
│   │   ├── loading.tsx              # Global loading UI (Server Component)
│   │   ├── error.tsx                # Global error UI (Client Component)
│   │   ├── not-found.tsx            # 404 page (Server Component)
│   │   ├── template.tsx             # Template (Server Component)
│   │   └── favicon.ico
│   │
│   ├── components/                  # React Components
│   │   ├── server/                  # Server Components (mặc định)
│   │   │   ├── blog/
│   │   │   │   ├── blog-list.tsx    # Server Component - Fetch data
│   │   │   │   └── blog-card.tsx    # Server Component
│   │   │   ├── product/
│   │   │   │   └── product-detail.tsx # Server Component
│   │   │   └── layout/
│   │   │       ├── header.tsx       # Server Component
│   │   │       └── footer.tsx       # Server Component
│   │   │
│   │   ├── client/                  # Client Components (có "use client")
│   │   │   ├── ui/                  # Reusable UI components
│   │   │   │   ├── button/
│   │   │   │   │   ├── button.tsx   # Client Component
│   │   │   │   │   └── button.test.tsx
│   │   │   │   ├── card/
│   │   │   │   │   └── card.tsx     # Client Component
│   │   │   │   ├── modal/
│   │   │   │   │   └── modal.tsx    # Client Component
│   │   │   │   └── index.ts         # Barrel exports
│   │   │   │
│   │   │   ├── features/            # Feature-specific components
│   │   │   │   ├── auth/
│   │   │   │   │   ├── login-form.tsx  # Client Component
│   │   │   │   │   └── register-form.tsx # Client Component
│   │   │   │   ├── blog/
│   │   │   │   │   └── blog-comments.tsx # Client Component
│   │   │   │   └── dashboard/
│   │   │   │       └── interactive-chart.tsx # Client Component
│   │   │   │
│   │   │   └── providers/           # Context providers
│   │   │       ├── theme-provider.tsx    # Client Component
│   │   │       ├── auth-provider.tsx     # Client Component
│   │   │       └── query-provider.tsx    # Client Component
│   │   │
│   │   └── shared/                  # Shared components (có thể là Server hoặc Client)
│   │       └── seo/
│   │           └── metadata.tsx     # Server Component helper
│   │
│   ├── lib/                         # Utilities & helpers
│   │   ├── server/                  # Server-only utilities
│   │   │   ├── db/                  # Database utilities
│   │   │   │   └── prisma.ts
│   │   │   ├── auth/                # Server auth utilities
│   │   │   │   └── session.ts
│   │   │   └── api/                 # Server API helpers
│   │   │       └── fetch-data.ts
│   │   │
│   │   ├── utils/                   # Utility functions (shared)
│   │   │   ├── cn.ts                # Class name utility
│   │   │   ├── format.ts            # Formatting functions
│   │   │   └── validation.ts        # Validation helpers
│   │   │
│   │   ├── constants/               # Constants
│   │   │   ├── routes.ts
│   │   │   └── config.ts
│   │   │
│   │   ├── validations/             # Schema validations (Zod, Yup, etc.)
│   │   │   ├── auth.schema.ts
│   │   │   └── user.schema.ts
│   │   │
│   │   └── api/                     # API client utilities (Client-side)
│   │       ├── client.ts            # API client setup
│   │       └── endpoints.ts         # API endpoints
│   │
│   ├── hooks/                       # Custom React hooks (Client Components only)
│   │   ├── use-auth.ts
│   │   ├── use-local-storage.ts
│   │   └── use-debounce.ts
│   │
│   ├── store/                       # State management (Client Components only)
│   │   ├── slices/                  # Redux slices (if using Redux)
│   │   │   ├── auth.slice.ts
│   │   │   └── user.slice.ts
│   │   ├── store.ts                 # Store configuration
│   │   └── hooks.ts                 # Typed hooks
│   │
│   ├── services/                    # Business logic & API calls
│   │   ├── server/                  # Server-side services
│   │   │   ├── blog.service.ts      # Server Component - Direct DB access
│   │   │   └── user.service.ts      # Server Component
│   │   │
│   │   └── client/                  # Client-side services
│   │       ├── auth.service.ts      # Client Component - API calls
│   │       └── api.service.ts       # Client Component
│   │
│   ├── types/                       # TypeScript types
│   │   ├── auth.types.ts
│   │   ├── user.types.ts
│   │   ├── api.types.ts
│   │   └── index.ts                 # Re-export all types
│   │
│   ├── styles/                      # Additional styles
│   │   ├── components.css
│   │   └── animations.css
│   │
│   └── middleware.ts                # Next.js middleware
│
├── .env.local                       # Local environment variables
├── .env.example                     # Example env file
├── .gitignore
├── .eslintrc.json                   # ESLint config
├── .prettierrc                      # Prettier config
├── next.config.ts                   # Next.js config
├── tsconfig.json                    # TypeScript config
├── tailwind.config.ts               # Tailwind config
├── postcss.config.mjs               # PostCSS config
├── package.json
├── pnpm-lock.yaml                   # or yarn.lock / package-lock.json
└── README.md
```

## 🔴 Server Components vs 🟢 Client Components

### Server Components (Mặc định - Không cần "use client")

**Đặc điểm:**

- ✅ Chạy trên server, không được bundle vào client
- ✅ Có thể truy cập trực tiếp database, file system, API keys
- ✅ Có thể async/await trực tiếp
- ✅ Tốt hơn cho SEO và performance
- ✅ Không thể sử dụng hooks (useState, useEffect, etc.)
- ✅ Không thể sử dụng browser APIs

**Khi nào dùng:**

- Fetch data từ database/API
- Hiển thị static content
- Components không cần interactivity

### Client Components (Cần "use client")

**Đặc điểm:**

- 🟢 Chạy trên browser
- 🟢 Có thể sử dụng hooks và browser APIs
- 🟢 Có thể handle events và state
- 🟢 Cần bundle vào client (lớn hơn)

**Khi nào dùng:**

- Cần interactivity (onClick, onChange, etc.)
- Cần hooks (useState, useEffect, etc.)
- Cần browser APIs (localStorage, window, etc.)
- Context providers

## Giải Thích Các Thư Mục

### `/src/app`

- **App Router** của Next.js 13+
- Mặc định là **Server Components**
- Sử dụng file-system based routing
- Mỗi folder là một route
- Special files: `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`

### `/src/components/server`

- **Server Components** - Fetch data, render UI
- Không có "use client"
- Có thể async/await
- Truy cập database trực tiếp

### `/src/components/client`

- **Client Components** - Interactivity, state, events
- Có "use client" directive
- Có thể dùng hooks

### `/src/lib/server`

- Server-only utilities
- Database connections
- Server-side auth
- Không thể import vào Client Components

### `/src/services/server`

- Server-side services
- Direct database access
- Server Component chỉ

### `/src/services/client`

- Client-side services
- API calls từ browser
- Client Component chỉ

## Best Practices

1. **Server Components First**: Ưu tiên Server Components, chỉ dùng Client khi cần
2. **Colocation**: Đặt Server và Client components gần nhau nhưng tách biệt rõ ràng
3. **Route Groups**: Sử dụng `(folder)` để nhóm routes mà không ảnh hưởng URL
4. **Type Safety**: Sử dụng TypeScript cho tất cả files
5. **Separation of Concerns**: Tách business logic khỏi UI

## Lưu Ý Quan Trọng

- **Mặc định là Server Component** - không cần "use client"
- **Chỉ thêm "use client" khi thực sự cần** (hooks, events, browser APIs)
- **Server Components có thể import Client Components**
- **Client Components KHÔNG THỂ import Server Components**
- **Pass data từ Server → Client qua props**
