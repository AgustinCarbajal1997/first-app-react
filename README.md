# Proyecto final del curso de React JS - CoderHouse

## Acerca del proyecto
Este proyecto es el resultado final de todo lo trabajado a lo largo de la cursada. Consiste, brevemente, en el desarrollo de un ecommerce utilizando React JS, además de todas las herramientas vistas en clases, como ser: React-Router-Dom, useContext, Firebase. Tambien se agregaron librerias como React Toastify, React Icons y React Loading. Por otro lado, para los estilos se utilizó CSS puro con la finalidad de que el proyecto conserve su originalidad y, fundamentalmente, continuar perfeccionandome en su uso. 


## Convenciones

* Se utiliza la arquitectura de división de componentes en aquellos que son contenedores (con toda o casi toda la lógica del componente) y aquellos otros que son de presentación (con aquello que se va a renderizar en pantalla, ignorando de donde provienen sus datos). Esta modularidad permite una fácil reutilización de los componentes, como se da en el caso, en este proyecto, con el ItemList (utilizado para mostrar productos tanto por ItemListContainer como por SearchContainer).
* A la hora de definir las funciones me inclinó por utilizar las arrow functions. En cuanto a su nomenclatura, cuando se trata de una función componente utilizo UpperCamelCase, si se trata de un método dentro de un componente utilizo lowerCamelCase.
* Para la nomenclatura de los archivos utilizo UpperCamelCase.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
