module.exports = {
  assetPrefix: `https://akallabet.github.io/carbonara`,
  pathPrefix: '/carbonara',
  siteMetadata: {
    title: 'Carbonara',
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/content/',
      },
      __key: 'content',
    },
  ],
}
