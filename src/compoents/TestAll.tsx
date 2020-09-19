import React,{ChangeEvent,FormEvent,useContext, useReducer,useState, useEffect}  from 'react'
import {TestContext} from '../App'
import {produce} from 'immer' 
import DeleteElement from './DeleteElement'
// import 'test.css'
import { v4 as uuidv4 } from 'uuid';

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
    content:'hello bonjour'
}

const TestAll:React.FC<any> = (props) =>{//any要改的
    const [elementContent, setElementContent] = useState<elementContent[]>(_elementContent);
    const [isPicEditShow, setIsPicEditShow] = useState<boolean>(false);//设置是否显示图像编辑框
    const [isTextEditShow, setIsTextEditShow] = useState<boolean>(false);//设置是否显示文字编辑框
    const [isDeleteShow, setIsDeleteShow] = useState<boolean>(false);//设置是否显示文字编辑框
    const [idstate, setIdstate] = useState<string>();//设置idstate
    const [picvalue, setPicvalue] = useState<string>(initialPic.content);//图像编辑框默认值
    const [txtvalue, setTxtvalue] = useState<string>(initialTxt.content);//文本编辑框默认值

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
                    id: uuidv4(),//
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
    

    return(
        <div>
            <h3>EditPage</h3>
            <button onClick={preview}>预览</button>
            <button onClick={saveAll}>保存</button>
            <button onClick={deleteAll}>清空</button>
            <h3>AddEl</h3>
            <button onClick={addPic}>图片添加</button>
            <button onClick={addTxt}>文字添加</button>
            <h3>ChangeEl</h3>
            <div style={{display: isDeleteShow ? "block" : "none"}}>
                <hr/>
                <h3>DeleteEl</h3>
                <button onClick={deleteEl}>删除</button>
            </div>
            <div style={{display: isPicEditShow ? "block" : "none"}}>
                <hr/>
                <h4>ChangePic</h4>
                <textarea onChange={picChange} value={picvalue} defaultValue={picvalue}/> 
                <br/>
                <button onClick={savePic}>修改图片</button>
            </div>
            <div style={{display: isTextEditShow ? "block" : "none"}}>
                <h4>ChangeText</h4>
                <textarea onChange={txtChange} value={txtvalue} defaultValue={txtvalue}/>     
            </div>

            <div>
            <hr/>
            <h3>ShowEl</h3>
            {
                elementContent.map((el,i)=>{
                    //还差样式激活 ！！！
                    if(el.type ==="pic") return (<img key={i} src={el.content} onClick={(e)=>{editPic(e,el.id)}} alt="loading error"/>)
                    else if(el.type ==="txt") return (<p key={i} onClick={(e)=>{editTxt(e,el.id)}}>{el.content}</p>)
                })  
            }
            <hr/>  
            </div>          
        </div>
    )
}

export default TestAll