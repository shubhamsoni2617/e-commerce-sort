import updateObjects  from './utility';

// const initialState={
//     loading : null,
//     userdata: {}
// }

// const fetchDataStart=(state, action)=>{
//     return updateObjects(state, {
//         loading: true
//     })
// }

const userData=(state, action)=>{
        return updateObjects(state,{ 
            userdata: action.payload,  
        })

}

export default (state=[], action)=>{
    switch(action.type){
        case 'FETCH_IMAGES': return userData(state, action);
        default: return state
    }
}