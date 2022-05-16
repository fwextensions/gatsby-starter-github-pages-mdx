module.exports = {
	siteMetadata: {
		title: "My Site",
		titleTemplate: "%s · My Site",
		description: "A Gatsby starter kit for building a Markdown/React site and deploying it to GitHub Pages using a GitHub Action."
	},
	pathPrefix: "/gatsby-starter",
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [".md", ".mdx"],
				defaultLayouts: {
					default: require.resolve("./src/components/Layout.js")
				}
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "pages",
				"path": "./src/pages/"
			},
			__key: "pages"
		}
	]
};
