import {CHANGE_NETSEARCH} from './constantnet';

const initNetstatesearch={
    netsearchField:'',

}

export const netSearchcontent = (state=initNetstatesearch ,action = {}) =>{
    switch(action.type) {
    case   CHANGE_NETSEARCH :
     return Object.assign({}, state, {setNetsearch:action.payload});
     default:
     return state;        
    }

}