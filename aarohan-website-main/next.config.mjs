  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com', // Google Drive images are served from this domain
        },
      ],
      domains: ['drive.google.com','instagram.fccu9-4.fna.fbcdn.net'],
      localPatterns: [
        {
          pathname: "/assets/**",
          search: "",
        },
      ],
    },
  };

  export default nextConfig;
