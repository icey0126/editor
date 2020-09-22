import React,{FormEvent,useContext,useState} from 'react'
import { AppContext } from '../context';

const AddElement:React.FC<any> = (props) =>{

    const { state: globalProps, dispatch } = useContext(AppContext);

    //加图片
    const addPic = (e: FormEvent<HTMLButtonElement>) => {
        dispatch({
            type: 'addPic',
            payload: [globalProps.initialPic]
        })
    };

    //加文字
    const addTxt = (e: FormEvent<HTMLButtonElement>) => {
        dispatch({
            type: 'addTxt',
            payload: [globalProps.initialTxt]
        })
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
