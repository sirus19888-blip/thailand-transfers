import type { NextConfig } from "next";

import path from "node:path";

const canonicalHost = "thailandtransferguide.com";
const wwwHost = `www.${canonicalHost}`;

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
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
