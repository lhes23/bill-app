module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://${process.env.NEXT_PUBLIC_BASE_URL}/:path*`
      }
    ]
  }
}
