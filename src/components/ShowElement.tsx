import React,{FormEvent,useContext,useState}  from 'react'
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

const ShowElement:React.FC<any> = (props) =>{
    const _elementContent = useContext(TestContext);
    const [elementContent, setElementContent] = useState<IElementProps[]>(_elementContent);
    const [isPicEditShow, setIsPicEditShow] = useState<boolean>(false);//设置是否显示图像编辑框
    const [isTextEditShow, setIsTextEditShow] = useState<boolean>(false);//设置是否显示文字编辑框
    const [isDeleteShow, setIsDeleteShow] = useState<boolean>(false);//设置是否显示删除编辑框
    const [idstate, setIdstate] = useState<string>();//设置idstate
    const [picvalue, setPicvalue] = useState<string>(initialPic.content);//图像编辑框默认值
    const [txtvalue, setTxtvalue] = useState<string>(initialTxt.content);//文本编辑框默认值

     //编辑文字
     const editTxt = (e: FormEvent<HTMLParagraphElement>,id:string) => {
        const txt = elementContent.find(e => e.id === id)
        setIsDeleteShow(true);
        //切换编辑窗
        setIsTextEditShow(true);
        setIsPicEditShow(false);
        setTxtvalue(txt?String(txt.content):"")//

        setIdstate(id);
    };

    //编辑图片
    const editPic = (e: FormEvent<HTMLImageElement>,id:string) => {
        const pic = elementContent.find(e => e.id === id)
        setIsDeleteShow(true);
        //切换编辑窗
        setIsPicEditShow(true);
        setIsTextEditShow(false);
        setPicvalue(pic?String(pic.content):"")
        setIdstate(id);  
    };

    return(
        <div className='col-xs-6 text-left'> 
        <h3>简单编辑器</h3>
        {
            elementContent.map((el,i)=>{
                //还差样式激活 ！！！
                if(el.type ==="pic") return (<img key={i} src={el.content} onClick={(e)=>{editPic(e,el.id)}} alt="loading error"/>)
                else if(el.type ==="txt") return (<p key={i} onClick={(e)=>{editTxt(e,el.id)}} >{el.content}</p>)
            })  
        }
        </div> 
    )
}

export default ShowElement