import * as actionTypes from './actionTypes';
import axios from '../../axiosInstance';

export const authStart=(data)=>{
    return dispatch=>{
        const expirationDate = new Date(new Date().getTime() + 3600000)
        const refreshExpirationDate = new Date(new Date().getTime()+86400000)
        localStorage.setItem('token',data.token)
        localStorage.setItem('refreshToken',data.refreshToken)
        localStorage.setItem('expirationDate',expirationDate)
        localStorage.setItem('refreshExpirationDate',refreshExpirationDate)
        localStorage.setItem('userId',data.user._id)
        dispatch(authSuccess(data.token,data.refreshToken,data.user._id))
        dispatch(checkAuthTimeout(3600,data.user))
    }
}

export const authSuccess=(token,refreshToken,id)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        token:token,
        refreshToken:refreshToken,
        userId:id
    }
}

export const checkAuthTimeout=(expirationTime,user)=>{
    return dispatch =>{
        setTimeout(()=>{
            const refreshExpirationDate=new Date(localStorage.getItem('refreshExpirationDate'))
            if(refreshExpirationDate>new Date()){
                const refreshtoken=localStorage.getItem('refreshtoken')
                axios.post('/token',{
                    refreshToken:refreshtoken,
                    email:user.email
                })
                .then(response=>{
                    if(response.status===200){
                        console.log(response)
                        dispatch(authStart(response.data))    
                    }
                 })
            }
            else{
                dispatch(logout())
            }
        },expirationTime*1000); 
    } 
}

export const logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('refreshExpirationDate')
    localStorage.removeItem('userId')
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}

export const authCheckState=()=>{
    return dispatch=> {
        const token=localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }
        else{
            const expirationDate=new Date(localStorage.getItem('expirationDate'))
            if(expirationDate>new Date()){
                const userId=localStorage.getItem('userId')
                const refreshToken=localStorage.getItem('refreshToken')
                dispatch(authSuccess({token,refreshToken,userId}))
                dispatch(checkAuthTimeout((expirationDate.getTime()-new Date().getTime())/1000,userId))
            }
            else{
                dispatch(logout())
            }
        }
    }
}