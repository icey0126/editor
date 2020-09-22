import React,{FormEvent,useContext,useState} from 'react'
import { AppContext } from '../context';
import { v4 as uuidv4 } from 'uuid';

const AddElement:React.FC<any> = (props) =>{

    const { state: globalProps, dispatch } = useContext(AppContext);

    //加图片
    const addPic = (e: FormEvent<HTMLButtonElement>) => {
        if(globalProps._elementContent.length === 0 ){
            dispatch({
                type: 'addPic',
                payload: [globalProps.initialPic]
            })
        }else{
            dispatch({
                type: 'addPic',
                payload: [{
                    id: uuidv4(),
                    type:'pic',
                    content:globalProps.initialPic.content 
                }]
            })
        }
    };

    //加文字
    const addTxt = (e: FormEvent<HTMLButtonElement>) => {
        if(globalProps._elementContent.length === 1){
            dispatch({
                type: 'addTxt',
                payload: [globalProps.initialTxt]
            })
        }else{
            dispatch({
                type: 'addTxt',
                payload: [{
                    id: uuidv4(),
                    type:'txt',
                    content:globalProps.initialTxt.content 
                }]
            })
        }
    };

    return(
        <div>
            <h3>添加元素</h3>
            <div className="btn-group">       
            <button onClick={addPic} className="btn btn-default">图片</button>
            <button onClick={addTxt} className="btn btn-default">文字</button>
            </div>
        </div>
    )
}

export default AddElement
