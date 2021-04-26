import React, { Component } from 'react';
import MyPaper from '../../UI/Paper'

//Static data

class Inbox extends Component{
  render(){
    //to fetch data from the backend
    console.log("index render")
    return (
      <div >
        <h3>Inbox component</h3>
        <MyPaper title="Hola" body1="body1 sdasgn asashasn hs as as cas cjas"> </MyPaper>
      </div>
    );
  } 
  componentDidMount(){
    console.log('componentInboxDidMount');
  }
}
export default Inbox;



