import type { NextConfig } from "next";

const canonicalHost = "thailandtransferguide.com";
const wwwHost = `www.${canonicalHost}`;

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: wwwHost }],
        destination: `https://${canonicalHost}`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: wwwHost }],
        destination: `https://${canonicalHost}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
