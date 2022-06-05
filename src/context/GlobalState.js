import React,{createContext, useReducer} from 'react'
import Reducer from './Reducer'

const initialState = {
    article:[
{
    id:1,
    heading: "Hello",
    subHeading: "This is what it is",
    description: "cool description",
    author:"smart nayyi"
}

    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) =>{
    const {state,dispatch} = useReducer(Reducer,initialState);
    
    function createArticle(article){
        dispatch({
            type: 'CREATE_ARTICLE',
            payload: article
        })
    }
     
    function deleteArticle(id){
        dispatch({
            type: 'DELETE_ARTICLE',
            payload: id
        })
    }
    function editArticle(article){
        dispatch({
            type: 'EDIT_ARTICLE',
            payload: article
        })
    }
    return(
        <GlobalContext.Provider value={
           { article:state.article,
             createArticle,deleteArticle,
            editArticle}
        }>
            {children}
        </GlobalContext.Provider>
    )
}
