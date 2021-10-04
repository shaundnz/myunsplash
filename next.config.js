/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.externals.push({
      "_http_common": "commonjs2 _http_common",
    })
    return config
  }
}
