import React,{FormEvent,useContext}  from 'react'
import {TestContext} from '../App'

interface DeleteElementProps{
    picLink?:string
    text?:string
}

const DeleteElement:React.FC<DeleteElementProps> = (props) =>{
    //const {picLink,text} = props;
    // const picLink = useContext(TestContext).pic;
    // const text = useContext(TestContext).text;
    //const elementType = pic.elementType || text.elementType;

    const deleteElement = (e: FormEvent<HTMLButtonElement>) => {
        alert('delete');
    };

    return(
        <div >
            <h4>元素操作</h4>
            <button onClick={deleteElement}>删除</button>
        </div>
    )
}

export default DeleteElement