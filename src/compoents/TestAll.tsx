import React,{ChangeEvent,FormEvent,useContext, useReducer,useState, useEffect}  from 'react'
import {TestContext} from '../App'
import {produce} from 'immer' 
import DeleteElement from './DeleteElement'

const _elementContent=[
    {key:0,type:'',content:''}
]

const initialPic = {
    key:0,
    type:'pic',
    content:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
}

const initialTxt = {
    key:0,
    type:'txt',
    content:'hello bonjour'
}

const TestAll:React.FC<any> = (props) =>{//any要改的
    const [elementContent, setElementContent] = useState<typeof _elementContent>(_elementContent);//类型要改
    const [isPicEditShow, setIsPicEditShow] = useState<boolean>(false);//设置是否显示图像编辑框
    const [isTextEditShow, setIsTextEditShow] = useState<boolean>(false);//设置是否显示文字编辑框
    const [isDeleteShow, setIsDeleteShow] = useState<boolean>(false);//设置是否显示文字编辑框
    const [keystate, setKeystate] = useState<number>(-1);//设置keystate
    const [picvalue, setPicvalue] = useState<string>(initialPic.content);//图像编辑框默认值
    const [txtvalue, setTxtvalue] = useState<string>(initialTxt.content);//文本编辑框默认值

    //加图片
    const addPic = (e: FormEvent<HTMLButtonElement>) => {
        if(_elementContent.length === 1 && _elementContent[0].key === 0 && _elementContent[0].type === ''){
            _elementContent[0] = initialPic;
            setElementContent([initialPic]);
        }else{
            _elementContent.push(
                {
                    key:_elementContent.length,
                    type:'pic',
                    content:initialPic.content 
                }
            )
            setElementContent([..._elementContent])  
        }
        //测试
        //alert('index:'+ (_elementContent.length-1) +'key:'+_elementContent[_elementContent.length-1].key);
    };

    //编辑图片
    const editPic = (e: FormEvent<HTMLImageElement>,key:number) => {
        setIsDeleteShow(true);
        //切换编辑窗
        setIsPicEditShow(true);
        setIsTextEditShow(false);
        //修改key
        setKeystate(key)
        return keystate;   
    };
    
    //获取图像编辑框改动
    const picChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setPicvalue(e.target.value);
    };

    //修改图片按钮
    const savePic = (e:FormEvent<HTMLButtonElement>) => {
        let key = keystate
        _elementContent[key] = {
            key:key,
            type:'pic',
            content:picvalue 
        }
        setElementContent([..._elementContent])
    };

    //加文字
    const addTxt = (e: FormEvent<HTMLButtonElement>) => {
        if(_elementContent.length === 1 && _elementContent[0].type === ''){
            _elementContent[0] = initialTxt;
            setElementContent([initialTxt]);
        }else{
            _elementContent.push({
                    key:_elementContent.length,
                    type:'txt',
                    content:initialTxt.content
            })  
        }
        setElementContent([..._elementContent])
        //测试
        //alert('index:'+ (_elementContent.length-1) +'key:'+_elementContent[_elementContent.length-1].key);
    };

    //编辑文字 !!!!!!!!!!
    const editTxt = (e: FormEvent<HTMLParagraphElement>,key:number) => {
        _elementContent[key] = {
            key:key,
            type:'txt',
            content:txtvalue //有问题
        }
        
        setIsDeleteShow(true);
        //切换编辑窗
        setIsTextEditShow(true);
        setIsPicEditShow(false);

        setElementContent([..._elementContent])

        setKeystate(key)
        return keystate;     
    };

    //获取文本编辑框改动 !!!!!!!!!
    const txtChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setTxtvalue(e.target.value);
    };

    //删除元素 ！！！
    const deleteEl = (e:FormEvent<HTMLButtonElement>) => {
        let key = keystate
        //根据KEY找到list中的指定对象并删除获得新的list，更新list
    };

    //预览所有元素
    const preview = (e:FormEvent<HTMLButtonElement>) => {
        //bootbox展示elementContent的所有内容 map遍历
    };
    
    //保存所有元素
    const saveAll = (e:FormEvent<HTMLButtonElement>) => {
        //把elementContent的所有内容存为json？localstorage
    };
    
    //清空所有元素
    const deleteAll = (e:FormEvent<HTMLButtonElement>) => {
        _elementContent.splice(0,_elementContent.length);
        setElementContent([..._elementContent])
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
                <h3>AddEl</h3>
                <button onClick={deleteEl}>删除</button>
            </div>
            <div style={{display: isPicEditShow ? "block" : "none"}}>
                <hr/>
                <h4>ChangePic</h4>
                <textarea onChange={picChange} defaultValue={picvalue}/> 
                <br/>
                <button onClick={savePic}>修改图片</button>
            </div>
            <div style={{display: isTextEditShow ? "block" : "none"}}>
                <h4>ChangeText</h4>
                <textarea onChange={txtChange} defaultValue={txtvalue}/>     
            </div>
            <hr/>
            <h3>ShowEl</h3>
            {
                elementContent.map((e,i)=>{
                    if(e.type ==="pic") return (<img key={i} src={e.content} onClick={(e)=>{editPic(e,i)}}/>)
                    else if(e.type==="txt") return (<p key={i} onClick={(e)=>{editTxt(e,i)}}>{e.content}</p>)
                })  
            }
            <hr/>            
        </div>
    )
}

export default TestAll