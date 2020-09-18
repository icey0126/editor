import React,{ChangeEvent,FormEvent,useContext, useReducer,useState}  from 'react'
import {TestContext} from '../App'
import {produce} from 'immer' 

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
    const [isShow, setShow] = useState<boolean>(false);//设置是否显示
    const [value, setValue] = useState<string>('helllo world!');//文本框默认值 测试用
    
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
                    content:'http://www.ruanyifeng.com/blogimg/asset/2016/bg2016021201.png' 
                }
            )
            setElementContent([
                {
                    key:_elementContent.length,
                    type:'pic',
                    content:'http://www.ruanyifeng.com/blogimg/asset/2016/bg2016021201.png' 
                }
            ]);    
        }
        //测试
        //alert('index:'+ (_elementContent.length-1) +'key:'+_elementContent[_elementContent.length-1].key);
    };

    //加文字
    const addTxt = (e: FormEvent<HTMLButtonElement>) => {
        if(_elementContent.length == 1 && _elementContent[0].key == 0 && _elementContent[0].type == ''){
            _elementContent[0] = initialTxt;
            setElementContent([initialTxt]);
        }else{
            _elementContent.push({
                    key:_elementContent.length,
                    type:'txt',
                    content:'kkkkkkkkk' 
            })
            setElementContent([{
                    key:_elementContent.length,
                    type:'txt',
                    content:'kkkkkkkkk' 
            }]);    
        }
        //测试
        //alert('index:'+ (_elementContent.length-1) +'key:'+_elementContent[_elementContent.length-1].key);
    };

    //编辑图片
    const editPic = (e: FormEvent<HTMLImageElement>,key:number) => {
        setShow(true);
        //alert(elementContent[key].url);
    };

    //编辑文字
    const editTxt = (e: FormEvent<HTMLParagraphElement>,key:number) => {
        setShow(true);
       // alert(elementContent[key].txt);
    };
    
    //获取文本框改动
    const realtimeChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    //修改图片按钮
    const savePic = (e:FormEvent<HTMLButtonElement>) => {
        alert(value);
    };

    return(
        <div>
            <h4>AddEl</h4>
            <button onClick={addPic}>图片添加</button>
            <button onClick={addTxt}>文字添加</button>
            <hr/>
            <div style={{display: isShow ? "block" : "none"}}>
                <h3>ChangePic</h3>
                <textarea onChange={realtimeChange} defaultValue={value}/> 
                <br/>
                <button onClick={savePic}>修改图片</button>
                <hr/>    
            </div>
            <h4>ShowEl</h4>
            {
                _elementContent.map((e,i)=>{
                    if(e.type ==="pic") return (<img key={i} src={e.content} onClick={(e)=>{editPic(e,i)}}/>)
                    else if(e.type==="txt") return (<p key={i} onClick={(e)=>{editTxt(e,i)}}>{e.content}</p>)
                })  
            }
            <hr/>            
        </div>
    )
}

export default TestAll