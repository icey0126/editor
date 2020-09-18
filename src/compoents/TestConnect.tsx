import React,{ChangeEvent,FormEvent,useContext, useReducer,useState}  from 'react'
import {TestContext} from '../App'
import {produce} from 'immer' 

const initialState = {
    url: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
    txt: "11111111",
}

const currentState = [
    {type:"pic",url:"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",key:0},
    {type:"txt",txt:"4545545545",key:1},
    {type:"txt",txt:"555555555",key:2}
]

function reducer(state:typeof initialState, action:any) {
    switch (action.type) {
        case 'addpic':
            return {...state, url:action.url}
        case 'addtext':
            return {...state, txt:action.txt}
        default:
            throw new Error();
    }
}

const TestConnect:React.FC<any> = (props) =>{//any要改的
    const elementContent = useContext(TestContext)
    const [state,dispatch] = useReducer(reducer,initialState);
    const [isShow, setShow] = useState<boolean>(false);
    const [value, setValue] = useState<string>('helllo world!');


    //immer
    const testButton = (e:FormEvent<HTMLButtonElement>) => {
        let nextState = produce(currentState, (draft) => {
            draft.push({type:"txt",txt:"draft",key:draft.length});
        })
        alert(nextState.length);
    };
    

    const addTxt = (e: FormEvent<HTMLButtonElement>) => {
        elementContent.push({type:"txt",txt:"hello nihao !!!!"})  
        dispatch({type: 'addtext',url:"!!!!!!!!!"})//imm
    };

    const addPic = (e: FormEvent<HTMLButtonElement>) => {
        elementContent.push({type:"pic",url:"http://www.ruanyifeng.com/blogimg/asset/2016/bg2016021201.png"})
        dispatch({type: 'addpic',url:"http://www.ruanyifeng.com/blogimg/asset/2016/bg2016021201.png"})//imm
    };

    const showDIV = (e: FormEvent<HTMLButtonElement>) => {
        setShow(true);
    };

    const realtimeChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    const savePic = (e:FormEvent<HTMLButtonElement>) => {
        alert(value);
    };

    const editPic = (e: FormEvent<HTMLImageElement>,key:number) => {
        //setShow(true);
        alert(elementContent[key].url);
    };

    const editTxt = (e: FormEvent<HTMLParagraphElement>,key:number) => {
        alert(elementContent[key].txt);
    };

    return(
        <div>
            <h4>测试</h4>
            <div style={{display: isShow ? "block" : "none"}}>
                <hr/>
                    <h3>Test form</h3>
                    <textarea onChange={realtimeChange} defaultValue={value}/> 
                    <br/>
                    <button onClick={savePic}>修改图片</button>
                <hr/>
            </div>
            <br/>
            <button onClick={showDIV}>显示修改框</button>
            <button onClick={addPic}>图片添加</button>
            <button onClick={addTxt}>文字添加</button>
            <button onClick={testButton}>测试immer按钮</button>
            <br/>
            {
                elementContent.map((e,i)=>{
                    if(e.type ==="pic") return (<img key={i} src={e.url} onClick={(e)=>{editPic(e,i)}}/>)
                    else if(e.type==="txt") return (<p key={i} onClick={(e)=>{editTxt(e,i)}}>{e.txt}</p>)
                })  
            }
            
        </div>
    )
}

export default TestConnect