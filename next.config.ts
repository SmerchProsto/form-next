import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/contact-us', // Компонент, куда будет идти редирект с корневого пути
        permanent: true, // Укажи true, если редирект должен быть постоянным
      },
    ];
  },
};

export default nextConfig;
