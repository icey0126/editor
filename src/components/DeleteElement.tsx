import React,{FormEvent,useContext,useState}  from 'react'
import {TestContext} from '../App'

interface IElementProps{
    id:string,
    type:string,
    content:string
}

const DeleteElement:React.FC<any> = (props) =>{
    const _elementContent = useContext(TestContext);
    const [elementContent, setElementContent] = useState<IElementProps[]>(_elementContent);
    const [isDeleteShow, setIsDeleteShow] = useState<boolean>(false);//设置是否显示删除编辑框
    const [isPicEditShow, setIsPicEditShow] = useState<boolean>(false);//设置是否显示图像编辑框
    const [isTextEditShow, setIsTextEditShow] = useState<boolean>(false);//设置是否显示文字编辑框
    const [idstate, setIdstate] = useState<string>();//设置idstate
    
    //删除元素 
    const deleteEl = (e:FormEvent<HTMLButtonElement>) => {
        let id = idstate;
        let newElement = elementContent.filter(e => e.id !== id)
        setElementContent([...newElement])
        setIsDeleteShow(false);
        setIsTextEditShow(false);
        setIsPicEditShow(false);
    };

    return(
    <div style={{display: isDeleteShow ? "block" : "none"}}  className="text-left">
        <button onClick={deleteEl} className="btn btn-default">删除</button>
    </div>
    )
}

export default DeleteElement