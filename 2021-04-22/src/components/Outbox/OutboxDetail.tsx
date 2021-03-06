import React, { Component } from 'react';
import axios from 'axios';
// eslint-disable-next-line
import MyPaper from '../../UI/Paper' ;
import MyProgressBar from '../../UI/MyProgressBar';
import MyCard from '../../UI/Card';

interface IProps{
    loading:boolean;
    data:any;
    error:any;
}

class OutboxDetail extends Component{
    //Representes in which state belong:loading,successfull or error 
    state={loading:true,data:null,error:null};
    render(){//THIS IS NOT GOING TO SHOW NOTHING
    return <OutboxDetailView {...this.state}/>
    } 
    componentDidMount(){
    console.log('componentStarredDidMount');
    //fetch id from adress bar(route params)
    const id=1;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
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

class OutboxDetailView extends Component<IProps>{
    //THIS ONLY RENDERS THE 3 DIFERENTS VIEWS,IT IS ONLY GOINT TO BE USE BY STARRED, WE DONT HAVE TO EXPORTED IT
    
    renderLoading(){
        // const dataJSX=<h3>Loading...</h3>;
        const dataJSX=<MyProgressBar/>
        return dataJSX;
    }
    renderSuccessfull(){
        // const dataJSX=<h1>Listo!</h1>;
        const dataJSX = <MyCard title={this.props.data.title} body={this.props.data.body} />
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

export default OutboxDetail;