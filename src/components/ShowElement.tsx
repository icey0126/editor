import React,{ FormEvent, useContext, MouseEvent, useState}  from 'react'
import { AppContext } from '../context';

const ShowElement:React.FC<any> = (props) =>{
  
    const { state: globalProps, dispatch } = useContext(AppContext);
    const { _elementContent: elementContent } = globalProps;

     //编辑文字
     const editTxt = (e: FormEvent<HTMLParagraphElement>,id:string) => {
        const txtItem = elementContent.find(e => e.id === id)
        const newSate ={
            isDeleteShow:true,
            isTextEditShow:true,
            isPicEditShow:false,
            txtvalue:txtItem?.content,
            idstate:id,
        }
        dispatch({
            type: 'editTxt',
            payload: newSate
        })
    };

    //编辑图片
    const editPic = (e: FormEvent<HTMLImageElement>,id:string) => {
        const picItem = elementContent.find(e => e.id === id)
        const newSate ={
            isDeleteShow:true,
            isPicEditShow:true,
            isTextEditShow:false,
            picvalue:picItem?.content,
            idstate:id,
        }
        dispatch({
            type: 'editPic',
            payload: newSate
        }) 
    };

    //showborder
    const makeBorderShow = (e:MouseEvent<HTMLDivElement>,id:string) => {       
        const element = elementContent.find(e => e.id === id)
        if(element)
        element.isBorderShow = true
        dispatch({
            type: 'makeBorderShow',
            payload: elementContent
        })
    };

    //hideborder
    const hideBorderShow = (e:MouseEvent<HTMLDivElement>,id:string) => {
        const element = elementContent.find(e => e.id === id)
        if(element)
        element.isBorderShow = false
        dispatch({
            type: 'hideBorderShow',
            payload: elementContent
        })
    };

    return(
        <div className='col-xs-6 text-left' style={{border:'1px solid',display:'block'}}> 
        <h3>简单编辑器</h3>
        {
            elementContent.map((el,i)=>{
                if(el.type ==="pic") return (<div key={el.id} style={{border:el.isBorderShow?'1px solid':''}} onMouseEnter={(e)=>{makeBorderShow(e,el.id)}} onMouseLeave={(e)=>{hideBorderShow(e,el.id)}}><img key={i} src={el.content} onClick={(e)=>{editPic(e,el.id)}} alt="loading error" className='img-responsive'/></div>)
                else if(el.type ==="txt") return (<div key={el.id} style={{border:el.isBorderShow?'1px solid':''}} onMouseEnter={(e)=>{makeBorderShow(e,el.id)}} onMouseLeave={(e)=>{hideBorderShow(e,el.id)}}><p onClick={(e)=>{editTxt(e,el.id)}} >{el.content}</p></div>)
            })  
        }
        </div> 
    )
}

export default ShowElement