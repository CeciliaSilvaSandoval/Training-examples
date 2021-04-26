import React, { Component } from 'react';
import axios from 'axios';
// eslint-disable-next-line
import MyPaper from '../../UI/Paper' ;
import MyProgressBar from '../../UI/MyProgressBar';

interface IProps{
    loading:boolean;
    data:any;
    error:any;
}

class Outbox extends Component{
    //Representes in which state belong:loading,successfull or error 
    state={loading:true,data:null,error:null};
    render(){//THIS IS NOT GOING TO SHOW NOTHING
    return <OutboxView {...this.state}/>
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

  }

class OutboxView extends Component<IProps>{
    //THIS ONLY RENDERS THE 3 DIFERENTS VIEWS,IT IS ONLY GOINT TO BE USE BY STARRED, WE DONT HAVE TO EXPORTED IT
    
    mailSelectedHandler(id:string){
        console.log("selected id :"+id);
    }
    renderLoading(){
        // const dataJSX=<h3>Loading...</h3>;
        const dataJSX=<MyProgressBar/>
        return dataJSX;
    }
    renderSuccessfull(){
        // const dataJSX=<h1>Listo!</h1>;
        const dataJSX = this.props.data.map((item:any)=>{
            return <MyPaper key={item.id} title={item.title} body1={item.body} clicked={()=>this.mailSelectedHandler(item.id)}/>
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

export default Outbox;