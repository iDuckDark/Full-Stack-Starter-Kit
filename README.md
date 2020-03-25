# Full-Stack-Starter-Kit
A Full-Stack Web Application Starter Kit for Developers. The purpose of this project is to speed up development by setting up all the common dependencies, continuous integrations/deployment, coding practices that are usually used by developers.

Please view the sample website [here](https://full-stack-starter-kit.netlify.com/)

<p align="center">
  <img src="assets/architecture.png?raw=true" width="500" title="Arch">
</p>

# Frontend
1. Gatsby
2. React
3. GraphQL
4. Redux
5. Material-UI (Theme and Components)

# Backend
1. Node.js
2. Express.js
3. MongoDB

# Continuous Integration / Continuous Deployment 
1. Travis (Unit Testing/ Deployment)
2. Netlify (Frontend Deployment)
3. Heroku (Backend Deployment) [steps](https://stackoverflow.com/questions/39197334/automated-heroku-deploy-from-subfolder)

# Code Formatter
1. ESLint
2. Prettier

## Install

1. Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

2. Run frontend (Gatsby.js) by running these commands:
```sh
cd frontend && yarn install && yarn start
```

3. Run backend (Express.js) by running these commands:
```sh
cd backend && yarn install && yarn start
```

4. Alternatively:
```sh
(cd frontend && yarn install && yarn start) & (cd backend && yarn install && yarn start)
```

5. OR
```sh
sh run.sh
```
