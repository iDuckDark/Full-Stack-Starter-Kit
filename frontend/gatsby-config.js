module.exports = {
    siteMetadata: {
        title: `Full-Stack Start Kit Project by Nevin`,
        description: `Full-Stack Start Kit Project by Nevin`,
        author: `@Nevin`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-sass",
        // {
        //   resolve: `gatsby-source-filesystem`,
        //   options: {
        //     name: `images`,
        //     path: `${__dirname}/src/images`,
        //   },
        // },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Full-Stack Start Kit Project by Nevin`,
                short_name: `Full-Stack Start Kit Project by Nevin`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
    ],
};
