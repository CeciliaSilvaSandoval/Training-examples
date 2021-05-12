# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the page:https://create-react-app.dev/docs/getting-started/

We use the following command:
```npx create-react-app my-app --template typescript ```

If this appear:
```You are running create-react-app 4.0.1, which is behind the latest release (4.0.3).We no longer support global installation of Create React App.```

Please remove any global installs with one of the following commands:
-sudo npm uninstall -g create-react-app

and run first command.

## Stating

In the project directory, you can run:

### cd my-app

Take us to our created directory : npx create-react-app `my-app` --template typescript

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


# fomatic-ui  13/04/21
```npm install fomantic-ui-css```


https://fomantic-ui.com/introduction/getting-started.html

# Installing UI-Material 14/04/21

https://material-ui.com/getting-started/installation/

```npm install @material-ui/core```
```npm install @material-ui/icons```

## Agregar fonts en material 

install :
```npm install fontsource-roboto```
Then, you can import it in your entry-point.

```import 'fontsource-roboto';```

Estructure source folder:

## components 

    contains components: dummy components wich doesnt have have state, its simply used for diplay

## containers

    contains specific components, what displays , what is going to change 

## layout

    how your pages look

https://material-ui.com/components/typography/#roboto-font-cdn
https://material-ui.com/components/grid/


# ROUTING OUR PROJECT 15_04_21

https://www.npmjs.com/package/react-router


https://www.npmjs.com/package/react-router-dom
https://www.npmjs.com/package/@types/react-router-dom

typing:
```npm i react-router```

```npm i react-router-dom```
```npm i @types/react-router-dom```

index.txs

```import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'fontsource-roboto'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render( <App />, document.getElementById('root')
);

```
Now our application is ready for routing.



# ORDER COMPONENTS 21_04_21

UI: Para todo lo de material ui

Paginas usada para obtener recursos del back:
https://jsonplaceholder.typicode.com/ 
https://jsonplaceholder.typicode.com/posts

Axios nos ayuda con la comunicacion del backend
https://www.npmjs.com/package/axios 
```npm i axios```

using:
    ```Performing a POST request

    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });```

# MAKING A TABLE 22_04_21

https://jsonplaceholder.typicode.com/users

Herramienta POSTMAN :https://www.postman.com/

# adding 24_04_21
All the elements incluided in the route have 3 properties:history,location and match 
    
    ```class Outbox extends Component{
        //Representes in which state belong:loading,successfull or error 
        state={loading:true,data:null,error:null};
        render(){//THIS IS NOT GOING TO SHOW NOTHING
        return <OutboxView {...this.state}/>
        } 
        componentDidMount(){
        ===>console.log('Outbox: ',Outbox);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{this.setState({loading:false,data:response.data,error:null})})
        .catch(error=>{this.setState({loading:false,data:null,error:error})})}
    }...```

OutboxView with out extend router has 3 props previous added: loading, data and error .
In this view you have to can acced to history property to make the match in outbox, we dont have in this moment the neccesary objects , so we need history location and match in the outboxview
    
    ```class OutboxView extends Component<IProps>{
        //THIS ONLY RENDERS THE 3 DIFERENTS VIEWS,IT IS ONLY GOINT TO BE USE BY STARRED, WE DONT HAVE TO EXPORTED IT
        
        mailSelectedHandler(id:string){
            console.log('Outbox View: ',this.props);
            console.log("selected id :"+id);
        }...```

To add to the outbox view we have to added the elements as properties, if we would have only one component, not divided , like in this case, this would be not necessary , but this is not the case 
    
    ```class Outbox extends Component{
        //Representes in which state belong:loading,successfull or error 
        state={loading:true,data:null,error:null};
        render(){//THIS IS NOT GOING TO SHOW NOTHING
        return <OutboxView {...this.state} {...this.props} <===Added />
        } 
        componentDidMount(){
        console.log('Outbox: ',Outbox);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{this.setState({loading:false,data:response.data,error:null})})
        .catch(error=>{this.setState({loading:false,data:null,error:error})})}
    }```

In this moment the outbox view has the other 3 objects:data ,loading,error,history,location and match
I just injected from the parent

In the case of this , we created an interface and this dont have the properties of the route, que can import RouteComponentProps to add to the interface, this will delete the error of using history, without the correct interface props 
    
    ```import MyProgressBar from '../../UI/MyProgressBar';
    import { withRouter, RouteComponentProps} from 'react-router-dom';
    interface IProps extends RouteComponentProps{
        loading:boolean;
        data:any;
        error:any;
    }
    class Outbox extends Component{
        //Representes in which state belong:loading,successfull or error 
        state={loading:true,data:null,error:null};
        render(){//THIS IS NOT GOING TO SHOW NOTHING
        return <OutboxView {...this.state} {...this.props}/>
        } 
        componentDidMount(){
        console.log('Outbox: ',Outbox);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{this.setState({loading:false,data:response.data,error:null})})
        .catch(error=>{this.setState({loading:false,data:null,error:error})})}
    }
    class OutboxView extends Component<IProps>{
        //THIS ONLY RENDERS THE 3 DIFERENTS VIEWS,IT IS ONLY GOINT TO BE USE BY STARRED, WE DONT HAVE TO EXPORTED IT
        mailSelectedHandler(id:string){
            console.log('Outbox View properties: ',this.props);
            console.log("selected id :"+id);
            this.props.history.push ({pathname:path});
        }```
The next step is to decide what path use 

Puting colon in a route thet means that there is a variable injected

    ```<Route path="/home/outbox/:id" exact component={OutboxDetail}></Route>```

Making this routing dynamic:    
    
    ```class OutboxView extends Component<IProps>{
        //THIS ONLY RENDERS THE 3 DIFERENTS VIEWS,IT IS ONLY GOINT TO BE USE BY STARRED, WE DONT HAVE TO EXPORTED IT
        mailSelectedHandler(id:string){
            console.log('Outbox View properties: ',this.props);
            console.log("selected id :"+id);
            this.props.history.push ({pathname:`/home/outbox/${id}`});
        }```
This is a popular package that helps you to handle multiple props 1:10 hrs para multiples propiedades pasadas por el path 
It converts the params in only one object
https://www.npmjs.com/package/query-string

## STARTING BUILDINNG BACKEND APIS TEORIA

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
