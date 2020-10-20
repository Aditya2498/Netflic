import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import NetCardlist from './NetCardlist';
import Netsearch from './Netsearch';
import { setNetsearch } from './actionnet';
import {netcontent} from './netcontent';

const mapStatetoProps = state =>{
  return {
    netsearchField:state.netsearchField,}

  }

const mapDispatchtoProps = (dispatch) =>{
    return{
      onsearchChang : (event) =>dispatch( setNetsearch(event.target.value)),

    }}



class App extends Component  {
constructor(){
  super()
  this.state = {
    netcontent : netcontent
  };

}


render() {   const {netcontent} = this.state;
             const {netsearchField,onsearchChang} = this.props;

                const filternets = netcontent.filter(netcontent =>{
                return netcontent.name.toLowerCase().includes(netsearchField.toLowerCase())
       })

return (<div className = 'bg-black tc'> 
         <h1 className = 'dark-red tc grow f-subheadline lh-titl'>NETFLIX</h1>
         <Netsearch netsearchchange={onsearchChang}/>
         <NetCardlist netcontent={filternets}/>
        </div>);}
        
  
   }

   export default  connect (mapStatetoProps,mapDispatchtoProps) (App);
