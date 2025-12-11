import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMdx = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
};

export default withMdx(nextConfig);
