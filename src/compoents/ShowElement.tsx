import React,{FormEvent,useContext}  from 'react'
import {TestContext} from '../App'

interface ShowElementProps{
    picLink?:string
    text?:string
    elementType?:string
}

// const picLinks=['https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png','https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png']
const ShowElement:React.FC<ShowElementProps> = (props) =>{
    //const {picLink,text} = props;
    const elementContent = useContext(TestContext)
    // const picLink = useContext(TestContext).pic;
    // const text = useContext(TestContext).text;
    //const elementType = pic.elementType || text.elementType;

    const editPic = (e: FormEvent<HTMLImageElement>) => {
        // alert(picLink);
        //在changeElement里显示图片url修改框
        
    };
    const editText = (e: FormEvent<HTMLParagraphElement>) => {
        // alert(text);
        
    };

    return(
        <div>
            <h4>简单编辑器</h4>
            {/* <p onClick={editText}>{text}</p> */}
            {/* <img src={_elementContent[0].url} onClick={editPic}/> */}
            {/* {
                picLinks.map((it: string, index) => (
                    <img key={index} src={it} />
                ))
            } */}
            {/* {
                elementContent.map((e,i)=>{
                    // let tag = "" any
                    if(e.type ==="pic") return (<img key={i} src={e.url}/>)
                    else if(e.type==="text") return (<p key={i}>{e.txt}</p>)
                })
                
            } */}
        </div>
    )
}

export default ShowElement