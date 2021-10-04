/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  target: "experimental-serverless-trace",
  webpack: (config, options) => {
    config.externals.push({
      "_http_common": "commonjs2 _http_common",
    })
    return config
  }
}
