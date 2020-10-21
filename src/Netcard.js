import React from 'react';


const Netcard = ({showimg,name,descrip,link}) => {
    return (<div className= 'tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className ='ba b--light-silver br3 shadow-5 ma2 dib' width='300'height='200'  alt = 'sowimg' src= {showimg}/>
            <h2 className = 'red' >{name}</h2>
            <p className='silver f5 i '>{descrip}</p>
            <a href = {link}><button  className = 'tc red bg-black br3 pa2 ma3 grow pointer ' >Watch Now  </button></a>
            </div>
             

    ); 
}

export default Netcard;