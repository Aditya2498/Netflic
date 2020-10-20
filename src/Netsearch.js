import React from 'react';

const Netsearch = ({netsearchfield,netsearchchange} ) =>{ 
    return(
    <div className='pa2'>
       <input className='pa3 ba b--blue bg- lightest red' 
           type='search'
           placeholder='search' 
           onChange={netsearchchange}/> 
    </div>)
    }

    export default Netsearch;