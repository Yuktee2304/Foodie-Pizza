import React from 'react';


export const userReducers = (state={}, action)=>{
    
    switch(action.type)
    {
        case 'USER_REGISTER_REQUEST':return{
            loading:true
        }

        case 'USER_REGISTER_SUCCESS':return{
            loading:false,
            success:true
        }

        case 'USER_REGISTER_FAILED':return{
            loading:false,
            error:action.payload
        }

        default:return{
            state
        }
    }
}

export const loginUserReducer = (state={}, action)=>{
    
    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST':return{
            loading:true
        }

        case 'USER_LOGIN_SUCCESS':return{
            loading:false,
            success:true,
            currentUser:JSON.parse(localStorage.getItem('currentUser'))
        }

        case 'USER_LOGIN_FAILED':return{
            loading:false,
            error:action.payload
        }

        default:return{
            state
        }
    }
}



