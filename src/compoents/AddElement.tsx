import React,{FormEvent,useContext,useState} from 'react'
import {TestContext} from '../App'

interface AddElementProps{
    picLink?:string
    text?:string
    elementType?:string
}

const AddElement:React.FC<AddElementProps> = (props) =>{
    //const [picLink,setpicLink] = useContext(TestContext);
    const elementContent = useContext(TestContext)

    // const picLink = useContext(TestContext).pic;
    // const text = useContext(TestContext).text;
    //const elementType = pic.elementType || text.elementType;

    const addText = (e: FormEvent<HTMLButtonElement>) => {
        //在ShowElement里添加Text
        // elementContent.push({
        //     type: "text",
        //     text: "New Text Test"
        // })
        alert(elementContent);
    };

    const addPic = (e: FormEvent<HTMLButtonElement>) => {
        // alert(picLink);
        // elementContent.push({
        //     type: "pic",
        //     url: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
        // })
        // alert(elementContent);

        //在ShowElement里添加Pic
        //alert(pic.picLink);
        // const picLink = pic.picLink
        // const element = document.querySelector("#showElementDiv");
        //const insertHTML = `<img src=\''${picLink}'\'/>`;   
        //alert(insertHTML);     
    };

    return(
        <div>
            <h4>添加元素</h4>
            <button onClick={addText}>文字</button>
            <button onClick={addPic}>图片</button>
        </div>
    )
}

export default AddElement