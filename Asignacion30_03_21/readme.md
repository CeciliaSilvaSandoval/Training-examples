# WITH AN EXISTENT PROJECT TYPESCRIPT 
"scripts": {
    "tsconfig": "tsc --init"
  },
tsc is the compiler , we can run it with: npm run tsconfig

# COMMANDS USED

## npm
### LOCAL (working with diferent version of typescript)
- npm init <-initialize a project( create package.json)>
- npm i <package_name>@<version>  <-Install a package>
- npm i --save-dev <package_name>@<version>  <-Install a package>
Here in oue package.json will appear the next code:
    "license": "ISC",
    "devDependencies": {
        "typescript": "^4.2.3"
    }

- npm i --save <package_name>@<version>  <-Install a package>
    "dependencies": {
    ...
    "moment": "^2.17.1"
    }

--save-dev is used to save the package for **development purpose**. Example: unit tests, minification.
It won't be installed when someone runs npm install directly to install your package. It's typically only installed if someone clones your source repository first and then runs npm install in it.

--save is used to save the package required for the application to run.It will be installed together with the package whenever someone runs npm install package.

ackoverflow.com/questions/22891211/what-is-the-difference-between-save-and-save-dev

- npm update <package_name>    <-updates the packages based on * ^ (virgulilla) >
- npm u <package_name>@<version>  <-Uninstall a package>
### GLOBAL (working with the same version, its not the best , but some files can be installed globally node_modules file, files like newman,node-gyp,expo-cli and others)
- npm i g <package_name>@<version>  <-Install a package globally>
- npm update g <package_name>    <-updates the packages based on * ^ (virgulilla) globally>
- npm u g<package_name>@<version>  <-Uninstall a package globally>

# USING COMPILER TYPESCRIPT
Adding tsc to our package.json
"scripts": {
    "tsconfig": "tsc --init",
    "start":"tsc"
  },
js file its created

# CONSULTED PAGES

- https://www.npmjs.com/
- https://webpack.js.org/