This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

## functional requirements:
1. The pages are fully adaptive, in terms of common practices and templates
2. All buttons are styled, clickable and working
3. The form sends data to the backend, which accepts it, processes it and returns a response (/api/hello)
   Technical Implementation:
1. The test task is written in Next, React with Typescript
2. The CSS-in-JS Styled-Components library was used to style the elements
3. Package Collector - webpack
4. The form is created using components from a third-party library (in this case, material-ui)
5. All pages are designed according to generally accepted SEO and accessibility recommendations
6. Form fields must be configured using CSS
7. YouTube videos are loaded using the react-lazy-load library
8. Added media preview Open Graph, twitter cards by meta tags
##   Important additions:
1. Semantics: the code is written taking into account the semantic design, hierarchy of headings, tag structure
2. Styling by classes: For better readability of names stylized elements, I implemented a partially similar spelling by class names as in BEM. (element__element-component = HeaderNavigation, HeaderLogo, etc.). I also added a reusable SectionInfoBlock class for example. Also, with good UI/UX, I added a transition to the main page when clicking on the company logo (some company in the header), if the user is not on it
3. The structure of the project directories: under the conditions of quickly writing a test task, a modular structure was implemented + a similar template for the design of segment names as FSD
## To sum up
We have an application that is adaptive for mobile and desktop devices, with the highest possible readability of the code and its design. The application is configured to interact with the server and, with further expansion, is able to communicate with it through other endpoints.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

