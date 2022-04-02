This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### deploy to Vercel rất đơn giản

- đăng ký tài khoản qua github
- bấm mọi thứ cấn thiết


### dùng next cho BE hay front end
- dùng được nhưng không nên do:
    mindset khác nhau không muốn đem chung prj
    cả 2 team đưa chung một cái => bự
    khó scale

### file system routing
- Overview:
    Khi sử dụng react-router-dom trong react JS
    tuy nhiên next sử dụng file-system routing để truy cập
    trong prj next folder sẽ có tên là pages. Khi có một component được add vào trong folder này => sẽ biên đổi thành một routing tương ứng


- có 3 dạng routes
    index routes: file name index
    nested routes: folder in pages
    dynamic routes: params trên routing 


- index route:
    index route: '/'
- nested route:
    route tự động được tạo thêm dựa trên các folder trong pages folder
    Các component trong các subfolder được chuyển thành các trang
- Dynamic routes:
    + single param: pages/posts/[param].tsx
    + multiple params
    + catch all routes [...slug] match tất cả post/a/b/c
    slug: [a, b, c]
    nhưng không match posts
    + optional catch all routes giống cái trên nhưng catch cả post/
    convention: [[...slug]].tsx

- độ ưu tiên giữa các route
    + pre-defined routes (create)
    + dynamic routes (postId)
    + catch all routes (/112/1231234/ => C)




### Navigation trong NextJS
- Navigate between pages with next/link
    <link href='/about'>
        <a>About us</a>
    </link>

- 