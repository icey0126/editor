import React,{ChangeEvent,FormEvent,useContext, useReducer,useState, useEffect,MouseEvent}  from 'react'
import {TestContext} from '../App'
import {produce} from 'immer' 
import DeleteElement from './DeleteElement'
import { v4 as uuidv4 } from 'uuid';
import {Modal,Button} from 'react-bootstrap';

interface elementContent{
    id:string,
    type:string,
    content:string
}

const _elementContent=[
    {id:'',type:'',content:''}
]

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

const TestAll:React.FC<any> = (props) =>{//any要改的
    const [elementContent, setElementContent] = useState<elementContent[]>(_elementContent);
    const [isPicEditShow, setIsPicEditShow] = useState<boolean>(false);//设置是否显示图像编辑框
    const [isTextEditShow, setIsTextEditShow] = useState<boolean>(false);//设置是否显示文字编辑框
    const [isDeleteShow, setIsDeleteShow] = useState<boolean>(false);//设置是否显示删除编辑框
    const [idstate, setIdstate] = useState<string>();//设置idstate
    const [picvalue, setPicvalue] = useState<string>(initialPic.content);//图像编辑框默认值
    const [txtvalue, setTxtvalue] = useState<string>(initialTxt.content);//文本编辑框默认值
    const [isBorderShow, setIsBorderShow] = useState<boolean>(false);//边框默认值
    const [isModalShow, setIsModalShow] = useState<boolean>(false);//模态框默认值

    //检查localstorage
    useEffect(() => {
        let elementList = localStorage.getItem('elementContent');
        if(elementList){
            setElementContent([...JSON.parse(elementList)])
        }
    }, [])

    //加图片
    const addPic = (e: FormEvent<HTMLButtonElement>) => {
        if(elementContent.length === 1 && elementContent[0].type === ''){
            elementContent[0] = initialPic;
            setElementContent([initialPic]);
        }else{
            elementContent.push(
                {
                    id: uuidv4(),
                    type:'pic',
                    content:initialPic.content 
                }
            )
            setElementContent([...elementContent]);
        }
        //测试
        //alert('index:'+ (elementContent.length-1) +'key:'+elementContent[elementContent.length-1].key);
    };

    //编辑图片
    const editPic = (e: FormEvent<HTMLImageElement>,id:string) => {
        const pic = elementContent.find(e => e.id === id)
        setIsDeleteShow(true);
        //切换编辑窗
        setIsPicEditShow(true);
        setIsTextEditShow(false);
        setPicvalue(pic?String(pic.content):"")
        //修改key
        setIdstate(id);  
    };
    
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
        //测试
        //alert('index:'+ (elementContent.length-1) +'key:'+elementContent[elementContent.length-1].key);
    };

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

    //获取文本编辑框改动 
    const txtChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
     elementContent.forEach(el => {
            if(el.id === idstate)
             el.content = e.target.value
        })   

        setElementContent([...elementContent]); 
        setTxtvalue(e.target.value);
    };

    //删除元素 
    const deleteEl = (e:FormEvent<HTMLButtonElement>) => {
        let id = idstate;
        let newElement = elementContent.filter(e => e.id !== id)
        setElementContent([...newElement])
        setIsDeleteShow(false);
        setIsTextEditShow(false);
        setIsPicEditShow(false);
        //根据KEY找到list中的指定对象并删除获得新的list，更新list
    };

    //预览所有元素
    const preview = (e:FormEvent<HTMLButtonElement>) => {
        //bootbox展示elementContent的所有内容 map遍历
        setIsModalShow(true)
    };
    
    //保存所有元素
    const saveAll = (e:FormEvent<HTMLButtonElement>) => {
        //把elementContent的所有内容存到localstorage
        localStorage.setItem('elementContent',JSON.stringify(elementContent));
    };
    
    //清空所有元素
    const deleteAll = (e:FormEvent<HTMLButtonElement>) => {
        elementContent.splice(0,elementContent.length);
        setElementContent([...elementContent]);
        //清空localstorage
        localStorage.removeItem('elementContent');
        setIsDeleteShow(false);
        setIsTextEditShow(false);
        setIsPicEditShow(false);
    };
    
    
    // //showborder
    // const makeBorderShow = (e:MouseEvent<HTMLDivElement>,id:string) => {
    //     //console.log('id',id);
    //     setIdstate(id);
    //     //console.log('idstate',idstate);
    //     elementContent.forEach(el => {
    //         if(el.id === idstate)
    //          setIsBorderShow(true)
    //     })
    // };

    // //hideborder
    // const hideBorderShow = (e:MouseEvent<HTMLDivElement>,id:string) => {
    //     //console.log('id',id);
    //     setIdstate(id);
    //     //console.log('idstate',idstate);
    //     elementContent.forEach(el => {
    //         if(el.id === idstate)
    //          setIsBorderShow(false);
    //     })
    // };


    return(
        <div className='container-fluid'>
            <div className='row'>

            <div className='col-xs-2'>
                <h3>文件操作</h3>
                <div className="btn-group">
                <button onClick={preview} className="btn btn-default">预览</button>
                <button onClick={saveAll} className="btn btn-default">保存</button>
                <button onClick={deleteAll} className="btn btn-default">清空</button>
                </div>
                <hr/>
                <h3>添加元素</h3>
                <div className="btn-group">       
                <button onClick={addPic} className="btn btn-default">图片</button>
                <button onClick={addTxt} className="btn btn-default">文字</button>
                </div>
            </div>
            <div className='col-xs-6 text-left'style={{border:'1px solid',display:'block'}}> 
                <h3>简单编辑器</h3>
                {
                    elementContent.map((el,i)=>{
                        //还差样式激活 onMouseOver={(e)=>{makeBorderShow(e,el.id)}} onMouseDown={(e)=>{hideBorderShow(e,el.id)}}  style={{border:isBorderShow?'1px solid':''}}
                        if(el.type ==="pic") return (<div key={el.id} ><img key={i} src={el.content} onClick={(e)=>{editPic(e,el.id)}} alt="loading error" className='img-responsive'/></div>)
                        else if(el.type ==="txt") return (<div key={el.id} ><p onClick={(e)=>{editTxt(e,el.id)}} >{el.content}</p></div>)
                    })  
                }
            </div> 
            
            <div className='col-xs-4 text-left'>
                <h3>元素操作</h3>
                <div style={{display: isDeleteShow ? "block" : "none"}}  className="text-left">
                    <button onClick={deleteEl} className="btn btn-default">删除</button>
                </div>
                <hr/>             
                <div style={{display: isPicEditShow ? "block" : "none"}}>
                    <h4>编辑</h4>
                    <textarea onChange={picChange} value={picvalue} defaultValue={picvalue} rows={3} cols={35}/> 
                    <br/>
                    <button onClick={savePic} className="btn btn-default">修改图片</button>
                </div>
                <div style={{display: isTextEditShow ? "block" : "none"}}>
                    <textarea onChange={txtChange} value={txtvalue} defaultValue={txtvalue}/>     
                </div>
            </div>

            {/* 
            <Modal show={isModalShow?'true':'false'} onHide={isModalShow?'true':'false'}>
                <Modal.Header closeButton>
                    <Modal.Title>推荐页面</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>111111</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hideModal}>Close</Button>
                </Modal.Footer>
            </Modal> */}


            </div>         
        </div>
    )
}

export default TestAll