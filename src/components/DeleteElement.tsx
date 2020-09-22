import React,{FormEvent,useContext,useState}  from 'react'
import { AppContext } from '../context';

const DeleteElement:React.FC<any> = (props) =>{
    const { state: globalProps, dispatch } = useContext(AppContext);
    
    //删除元素 
    const deleteEl = (e:FormEvent<HTMLButtonElement>) => {
        let id = globalProps.idstate;
        let newElement = globalProps._elementContent.filter(e => e.id !== id)
        globalProps._elementContent.forEach(el => {
            if(el.id === globalProps.idstate)
             el.content = globalProps.txtvalue; 
        })  
        const newSate ={
            _elementContent:newElement,
            isDeleteShow:false,
            isTextEditShow:false,
            isPicEditShow:false
        }
        dispatch({
            type: 'deleteEl',
            payload: newSate
        })
    };

    return(
    <div style={{display: globalProps.isDeleteShow ? "block" : "none"}}  className="text-left">
        <button onClick={deleteEl} className="btn btn-default">删除</button>
    </div>
    )
}

export default DeleteElement