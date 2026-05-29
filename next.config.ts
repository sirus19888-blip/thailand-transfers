import type { NextConfig } from "next";

const canonicalHost = "thailandtransferguide.com";
const wwwHost = `www.${canonicalHost}`;

const nextConfig: NextConfig = {
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
