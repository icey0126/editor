import React,{FormEvent,useContext, useReducer}  from 'react'
import {TestContext} from '../App'

const _elementContent = [
    {type:"pic",content:"https://bkimg.cdn.bcebos.com/pic/55e736d12f2eb938cf4969a2dc628535e5dd6fbd?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg"},
    {type:"text",content:"abcd"},
    {type:"pic",content:"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"},
    {type:"text",content:"1111"}
]

const initialState = {
    url: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
    txt: "empty text"
}

function reducer(state:typeof initialState, action:any) {
    switch (action.type) {
        case 'addpic':
            return {...state, url:action.url};
        case 'addtext':
            return {...state, txt:action.txt};
        default:
            throw new Error();
    }
}

const TestReducer:React.FC<any> = (props) =>{
    const elementContent = useContext(TestContext)
    const [state,dispatch] = useReducer(reducer,initialState);

    return(
        <div>
            <h4>测试reducer</h4>
            <p>{state.txt}</p>
            <img src={state.url}/>
            <br/>
            <button onClick={() => dispatch({type: 'addpic',url:'https://bkimg.cdn.bcebos.com/pic/55e736d12f2eb938cf4969a2dc628535e5dd6fbd?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg'})}>图片添加</button>
            <button onClick={() => dispatch({type: 'addtext',txt:'kkkkkkkkkkk'})}>文字添加</button>
            {/* {
                _elementContent.map((e,i)=>{
                    if(e.type ==="pic") return (<img key={i} src={e.content}/>)
                    else if(e.type==="text") return (<p key={i}>{e.content}</p>)
                })
                
            } */}
            
        </div>
    )
}

export default TestReducer