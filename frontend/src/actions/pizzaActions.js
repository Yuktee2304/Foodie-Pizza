import axios from 'axios';

const getAllPizzas = ()=>async dispatch=>{
    dispatch({type:"GET_PIZZAS_REQUEST"})
    try
    {
        const response = await axios.get('/api/pizzas/getAllPizzas')
        dispatch({type:'GET_PIZZAS_SUCCESS', payload:response.data})
    }
    catch(error){
        dispatch({type:"GET_PIZZAS_FAILED", payload: error})
    }
}

export default getAllPizzas;