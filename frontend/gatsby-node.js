/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { getPages } = require(`./src/routes`);

exports.createPages = ({ actions }) => {
    const { createPage, createRedirect } = actions;
    const redirectMap = { "/home": "/" };
    for (const { page, path, link } of getPages()) {
        redirectMap[link] = path;
        createPage(page);
    }
    for (const fromPath in redirectMap) {
        createRedirect({
            fromPath,
            toPath: redirectMap[fromPath],
            redirectInBrowser: true,
            isPermanent: true,
        });
    }
};
