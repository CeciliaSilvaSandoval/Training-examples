import React, { Component } from 'react';
import axios from 'axios';
// eslint-disable-next-line
import MyPaper from '../../UI/Paper' ;
import MyProgressBar from '../../UI/MyProgressBar';
import MyCard from '../../UI/Card';
import { RouteComponentProps } from 'react-router';
// Para solucionar el id
interface MatchParams{
    id:string;
}
interface IProps2 extends RouteComponentProps<MatchParams>{

}
interface IProps extends RouteComponentProps{
    loading:boolean;
    // thisis an an object not an array of objects
    // {
    //     userId: 1,
    //     id: 1,
    //     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    //     },
    data:{title:string,body:string} | null; 
    error:any;
}
// interface IDSTATE {
//     loading:boolean;
//     // the same 
//     data:{} | null; 
//     error:any;
// }

class OutboxDetail extends Component<IProps2>{
    //Representes in which state belong:loading,successfull or error 
    state:any={loading:true,data:null,error:null};
    render(){//THIS IS NOT GOING TO SHOW NOTHING
    return <OutboxDetailView {...this.state} {...this.props}/>
    } 
    componentDidMount(){
    console.log('componentStarredDidMount');
    console.log('outboxDetail props',this.props);
    //fetch id from adress bar(route params)
    const id=this.props.match.params.id;
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
    backButtonSelectedHandler=()=>{
        console.log('Im a button');
        // Se va uno atras 
        this.props.history.goBack();
    }
    renderLoading(){
        // const dataJSX=<h3>Loading...</h3>;
        const dataJSX=<MyProgressBar/>
        return dataJSX;
    }
    renderSuccessfull(){
        // const dataJSX=<h1>Listo!</h1>;
        const dataJSX = <MyCard title={this.props.data?.title} body={this.props.data?.body} clicked={this.backButtonSelectedHandler}/>
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