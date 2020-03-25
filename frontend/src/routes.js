const loader = require("path");

const { faGopuram, faUsers } = require("@fortawesome/free-solid-svg-icons");

const routes = [
    {
        title: "Home",
        path: "/",
        icon: faGopuram,
    },
    {
        title: "Contributors",
        link: "/Contributors/Contributors",
        icon: faUsers,
    },
];

const getPath = title => {
    return `/${title.replace(/\s+/g, "-").toLowerCase()}`;
};

const getComponent = link => {
    return loader.resolve(`./src/pages/${link}.jsx`);
};

const getPage = route => {
    const { title, link } = route;
    return {
        path: getPath(title),
        component: getComponent(link),
    };
};

const getRoutes = () => {
    for (let i = 1; i < routes.length; i += 1) {
        const { items } = routes[i];
        if (items) {
            for (const item of items) {
                item.page = getPage(item);
                item.path = item.page.path;
            }
        } else {
            routes[i].page = getPage(routes[i]);
            routes[i].path = routes[i].page.path;
        }
    }
    return routes;
};

const getPages = () => {
    const results = [];
    for (const route of getRoutes()) {
        const { items } = route;
        if (items) results.push(...items);
        else results.push(route);
    }
    return results.slice(1);
};

module.exports = {
    routes: getRoutes(),
    getPages,
};
