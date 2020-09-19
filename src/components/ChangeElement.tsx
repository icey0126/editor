import React,{FormEvent,useContext,useState,ChangeEvent} from 'react'
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

const ChangeElement:React.FC<any> = (props) =>{
    const _elementContent = useContext(TestContext);
    const [elementContent, setElementContent] = useState<IElementProps[]>(_elementContent);
    const [isPicEditShow, setIsPicEditShow] = useState<boolean>(false);//设置是否显示图像编辑框
    const [isTextEditShow, setIsTextEditShow] = useState<boolean>(false);//设置是否显示文字编辑框
    const [idstate, setIdstate] = useState<string>();//设置idstate
    const [picvalue, setPicvalue] = useState<string>(initialPic.content);//图像编辑框默认值
    const [txtvalue, setTxtvalue] = useState<string>(initialTxt.content);//文本编辑框默认值

    //获取图像编辑框改动
    const picChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setPicvalue(e.target.value);
    };

    //修改图片按钮
    const savePic = (e:FormEvent<HTMLButtonElement>) => {
        elementContent.forEach(el => {
            if(el.id === idstate)
             el.content = picvalue; 
        })  
        setElementContent([...elementContent]);
    };

    //获取文本编辑框改动 
    const txtChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        elementContent.forEach(el => {
            if(el.id === idstate)
                el.content = e.target.value
        })

        setElementContent([...elementContent]); 
        setTxtvalue(e.target.value);
    };

    return(
        <div>
            <div style={{display: isPicEditShow ? "block" : "none"}}>
            <h4>编辑</h4>
                <textarea onChange={picChange} value={picvalue} defaultValue={picvalue}/> 
                <br/>
                <button onClick={savePic} className="btn btn-default">修改图片</button>
            </div>
            <div style={{display: isTextEditShow ? "block" : "none"}}>
                <textarea onChange={txtChange} value={txtvalue} defaultValue={txtvalue}/>     
            </div>
        </div>
    )
}

export default ChangeElement