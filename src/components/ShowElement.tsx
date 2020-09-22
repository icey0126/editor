import React,{ FormEvent, useContext, useState}  from 'react'

import { AppContext } from '../context';

interface IElementProps{
    id:string,
    type:string,
    content:string
}

const ShowElement:React.FC<any> = (props) =>{

  
    const { state: globalProps, dispatch } = useContext(AppContext);
    const { _elementContent: elementContent } = globalProps;
    
    const [isPicEditShow, setIsPicEditShow] = useState<boolean>(globalProps.isPicEditShow);//设置是否显示图像编辑框
    const [isTextEditShow, setIsTextEditShow] = useState<boolean>(globalProps.isTextEditShow);//设置是否显示文字编辑框
    const [isDeleteShow, setIsDeleteShow] = useState<boolean>(globalProps.isDeleteShow);//设置是否显示删除编辑框
    const [idstate, setIdstate] = useState<string>(globalProps.idstate);//设置idstate
    const [picvalue, setPicvalue] = useState<string>(globalProps.initialPic.content);//图像编辑框默认值
    const [txtvalue, setTxtvalue] = useState<string>(globalProps.initialTxt.content);//文本编辑框默认值


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
        <div className='col-xs-6 text-left' style={{border:'1px solid',display:'block'}}> 
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