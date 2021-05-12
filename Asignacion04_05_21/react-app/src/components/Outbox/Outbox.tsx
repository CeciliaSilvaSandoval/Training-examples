import React, { Component } from 'react';
// import axios from 'axios';
// eslint-disable-next-line
import MyPaper from '../../UI/Paper' ;
import MyProgressBar from '../../UI/MyProgressBar';
import { RouteComponentProps} from 'react-router-dom';
import axios from '../../axios';
interface IProps2 extends RouteComponentProps{

}
interface IProps extends RouteComponentProps{
    loading:boolean;
    // thisis an array of objects
    data:{}[] | null; 
    error:any;
}
interface IDSTATE {
    loading:boolean;
    // thisis an array of objects
    data:{}[] | null; 
    error:any;
}
class Outbox extends Component<IProps2>{
    //Representes in which state belong:loading,successfull or error 
    state:IDSTATE={loading:true,data:null,error:null};
    render(){//THIS IS NOT GOING TO SHOW NOTHING
    return <OutboxView {...this.state} {...this.props}/>
    } 
    componentDidMount(){
    console.log('Outbox: ',Outbox);
    axios.get('/posts')
    .then(response=>{this.setState({loading:false,data:response.data,error:null})})
    .catch(error=>{this.setState({loading:false,data:null,error:error})})}
  }
class OutboxView extends Component<IProps>{
    //THIS ONLY RENDERS THE 3 DIFERENTS VIEWS,IT IS ONLY GOINT TO BE USE BY STARRED, WE DONT HAVE TO EXPORTED IT
    mailSelectedHandler(id:string){
        console.log('Outbox View properties: ',this.props);
        console.log("selected id :"+id);
        this.props.history.push ({pathname:`/home/outbox/${id}`});
    }
    renderLoading(){
        // const dataJSX=<h3>Loading...</h3>;
        const dataJSX=<MyProgressBar/>
        return dataJSX;
    }
    renderSuccessfull(){
        // const dataJSX=<h1>Listo!</h1>;
        const dataJSX = this.props.data?.map((item:any)=>{
            // If the function has no arguments you can do this
            // return <MyPaper key={item.id} title={item.title} body1={item.body} clicked={this.mailSelectedHandler}/>
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