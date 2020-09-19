import React,{FormEvent,useContext,useState} from 'react'
import {TestContext} from '../App'
import { v4 as uuidv4 } from 'uuid';

interface IElementProps{
    id:string,
    type:string,
    content:string
}

const initialPic = {
    id:uuidv4(),
    type:'pic',
    content:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
}

const initialTxt = {
    id:uuidv4(),
    type:'txt',
    content:'empty text'
}

const AddElement:React.FC<any> = (props) =>{

    const _elementContent = useContext(TestContext);
    const [elementContent, setElementContent] = useState<IElementProps[]>(_elementContent);

    //加图片
    const addPic = (e: FormEvent<HTMLButtonElement>) => {
        if(elementContent.length === 1 && elementContent[0].type === ''){
            elementContent[0] = initialPic;
            setElementContent([initialPic]);
        }else{
            elementContent.push(
                {
                    id: uuidv4(),//
                    type:'pic',
                    content:initialPic.content 
                }
            )
            setElementContent([...elementContent]);
        }
    };

    //加文字
    const addTxt = (e: FormEvent<HTMLButtonElement>) => {
        if(elementContent.length === 1 && elementContent[0].type === ''){
            elementContent[0] = initialTxt;
            setElementContent([initialTxt]);
        }else{
            elementContent.push({
                    id:uuidv4(),//
                    type:'txt',
                    content:initialTxt.content
            })  
        }
        setElementContent([...elementContent]);
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