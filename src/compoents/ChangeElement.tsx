import React,{FormEvent,useContext} from 'react'
import {TestContext} from '../App'

interface ChangeElementProps{
    picLink?:string
    text?:string
    elementType?:string
}

const ChangeElement:React.FC<ChangeElementProps> = (props) =>{
    //const {picLink,text,elementType} = props;
    // const picLink = useContext(TestContext).pic;
    // const text = useContext(TestContext).text;
    //const elementType = pic.elementType || text.elementType;
    
    const editText = (e: FormEvent<HTMLButtonElement>) => {
        //alert(text);
    };

    const editPic = (e: FormEvent<HTMLButtonElement>) => {
        //alert(picLink);
    };

    return(
        <div>
            <h4>编辑元素</h4>
            <button onClick={editText}>修改文字</button>
            <button onClick={editPic}>修改图片</button>
        </div>
    )
}

export default ChangeElement