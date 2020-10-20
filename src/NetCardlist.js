import React from 'react';
import  Netcard from './Netcard';



const NetCardlist = ({netcontent}) =>{ return(<div>{ netcontent.map((user,i)=>{
    return (
           <Netcard 
             key = {i}
             id = {netcontent[i].id}
             showimg = {netcontent[i].showimg}
             name ={netcontent[i].name}
            descrip={netcontent[i].descrip}
            link={netcontent[i].link}/> 
            );
       })
    }</div>);}

    export default NetCardlist;
    
   
 
              
            
     
    
    


    