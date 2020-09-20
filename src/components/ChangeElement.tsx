import React,{FormEvent,useContext,useState,ChangeEvent} from 'react'
import {TestContext} from '../App'

interface IElementProps{
    id:string,
    type:string,
    content:string
}

const ChangeElement:React.FC<any> = (props) =>{
    const globalProps = useContext(TestContext);
    const [elementContent, setElementContent] = useState<IElementProps[]>(globalProps._elementContent);
    const [isPicEditShow, setIsPicEditShow] = useState<boolean>(globalProps.isPicEditShow);//设置是否显示图像编辑框
    const [isTextEditShow, setIsTextEditShow] = useState<boolean>(globalProps.isTextEditShow);//设置是否显示文字编辑框
    const [idstate, setIdstate] = useState<string>(globalProps.idstate);//设置idstate
    const [picvalue, setPicvalue] = useState<string>(globalProps.initialPic.content);//图像编辑框默认值
    const [txtvalue, setTxtvalue] = useState<string>(globalProps.initialTxt.content);//文本编辑框默认值

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