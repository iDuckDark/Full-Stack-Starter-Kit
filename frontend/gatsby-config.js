module.exports = {
    siteMetadata: {
        title: `Full-Stack Start Kit Project by Nevin`,
        description: `Full-Stack Start Kit Project by Nevin`,
        author: `@Nevin`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-sass",
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "dataPrivate",
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/assets/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Full-Stack Start Kit Project by Nevin`,
                short_name: `Full-Stack Start Kit Project by Nevin`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `${__dirname}/assets/images/gatsby-icon.png`,
            },
        },
    ],
};
