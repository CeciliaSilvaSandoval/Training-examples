import React, { Component } from 'react';
import axios from 'axios';
// eslint-disable-next-line
import MyPaper from '../../UI/Paper' ;
import MyProgressBar from '../../UI/MyProgressBar';

//ASINCRONOUS CALL TO THE BACKEND
//For dinamic data , you must have to have an state
//we have to declare some properties , to call data from the backend
//When we call data from the backend , we have to have 3 views
//1.-trying to make the call to the back(progress bar ,fetching message)
//2.-successfully fetch the data (Display Data)
//3.-unsuccessfully fetch the data (something fail)
interface IProps{
    loading:boolean;
    data:any;
    error:any;
}

class Starred extends Component{
    //Representes in which state belong:loading,successfull or error 
    state={loading:true,data:null,error:null};
    render(){//THIS IS NOT GOING TO SHOW NOTHING
    return <StarredView {...this.state}/>
    } 
    componentDidMount(){
    console.log('componentStarredDidMount');
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response.data);
        this.setState({loading:false,data:response.data,error:null})
    })
    .catch(error=>{
        console.log(error);
        this.setState({loading:false,data:null,error:error})
    })
    }
    //This happends only once, dont call the setState on the render , it would be repetitive
        //Fetch data from backend
        //const res= fetch('https://jsonplaceholder.typicode.com/posts')
        //then (data->console.log(data);this.setState({loading:false,data:data,error:null}))
        //catch(error->console.log(error);this.setState({loading:false,data:null,error:error})
        //WE ARE GOING TO SPLIT STARRED VIEW IN 2 COMPONENTS (1.-TAKE CAREOF TH ALL 3 STAGES OF VIEW, 2.-FETCHING THE DATA Y UPDATE THE STATE))
        // axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
  }

class StarredView extends Component<IProps>{
    //THIS ONLY RENDERS THE 3 DIFERENTS VIEWS,IT IS ONLY GOINT TO BE USE BY STARRED, WE DONT HAVE TO EXPORTED IT
    
    renderLoading(){
        // const dataJSX=<h3>Loading...</h3>;
        const dataJSX=<MyProgressBar/>
        return dataJSX;
    }
    renderSuccessfull(){
        // const dataJSX=<h1>Listo!</h1>;
        const dataJSX = this.props.data.map((item:any)=>{
            return <MyPaper key={item.id} title={item.title} body1={item.body}/>
        })
        return dataJSX;
    }
    renderError(){
        const dataJSX=<h3>Error...</h3>;
        return dataJSX;
    }

    render(){
        if(this.props.loading){
            return (this.renderLoading());
        }else if(this.props.data){
            return (this.renderSuccessfull());
        }else{
            return (this.renderError());
        }
  } 
}

export default Starred;