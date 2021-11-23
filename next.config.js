const isEnvProd = process.env.NODE_ENV === "production";

const localhostUrl = "http://localhost:3000";
const prodUrl = "https://dummy-ltd-webapp.vercel.app";

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  env: {
    clientId:
      process.env.NEXT_PUBLIC_APP_CLIENT_ID ||
      "086e9a9d-8fad-4e91-bebb-36be2545d99e",
    authority:
      "https://SwapooLabsDEV.b2clogin.com/SwapooLabsDEV.onmicrosoft.com/B2C_1A_1_SIGNIN_LTD",
    backendUrl: process.env.URL_BACKEND,
    rootUrl: isEnvProd ? prodUrl : localhostUrl,
  },
  images: {
    domains: ["assets2.rappler.com"],
  },
};

// if (isEnvProd) {
//   nextConfig.assetPrefix = `${process.env.URL_LOCALSTACK}/${process.env.AWS_S3_BUCKET_NAME}`;
// }

module.exports = nextConfig;
