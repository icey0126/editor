import React,{FormEvent,useContext,useState,ChangeEvent} from 'react'
import { AppContext } from '../context';
import { Editor } from '@tinymce/tinymce-react';

const ChangeElement:React.FC<any> = (props) =>{
    const { state: globalProps, dispatch } = useContext(AppContext);
    const { _elementContent: elementContent} = globalProps;

    //获取图像编辑框改动
    const picChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const newSate ={
            picvalue:e.target.value
        }
        dispatch({
            type: 'picChange',
            payload: newSate
        })
    };

    //修改图片按钮
    const savePic = (e:FormEvent<HTMLButtonElement>) => {
        elementContent.forEach(el => {
            if(el.id === globalProps.idstate)
             el.content = globalProps.picvalue; 
        })  
        dispatch({
            type: 'addPic',
            payload: elementContent
        })
    };

    //获取文本编辑框改动 
    const txtChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        elementContent.forEach(el => {
            if(el.id === globalProps.idstate)
             el.content = globalProps.txtvalue; 
        })  
        const newSate ={
            txtvalue:e.target.value,
            _elementContent:elementContent
        }
        dispatch({
            type: 'addTxt',
            payload: newSate
        })
    };

    return(
        <div>
            <div style={{display: globalProps.isPicEditShow ? "block" : "none"}}>
            <h4>编辑</h4>
                <textarea onChange={picChange} value={globalProps.picvalue} defaultValue={globalProps.picvalue}/> 
                <br/>
                <button onClick={savePic} className="btn btn-default">修改图片</button>
            </div>
            <div style={{display: globalProps.isTextEditShow ? "block" : "none"}}>
                <Editor
                inline={false}
                initialValue={globalProps.txtvalue}
                onChange = {txtChange}
                value={globalProps.txtvalue}
                init={{
                    height: '400px',
                    language: 'zh_CN',
                    plugins: 'table lists link image',
                    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent',
                    relative_urls: false,
                    content_css: [
                        '/codepen.min.css'
                    ],
                }}
                />
                <textarea onChange={txtChange} value={globalProps.txtvalue} defaultValue={globalProps.txtvalue}/>     
            </div>
        </div>
    )
}

export default ChangeElement