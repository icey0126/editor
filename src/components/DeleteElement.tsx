import React,{FormEvent,useContext,useState}  from 'react'
import { AppContext } from '../context';

interface IElementProps{
    id:string,
    type:string,
    content:string
}

const DeleteElement:React.FC<any> = (props) =>{
    const { state: globalProps, dispatch } = useContext(AppContext);
    const [elementContent, setElementContent] = useState<IElementProps[]>(globalProps._elementContent);
    const [isDeleteShow, setIsDeleteShow] = useState<boolean>(globalProps.isDeleteShow);//设置是否显示删除编辑框
    const [isPicEditShow, setIsPicEditShow] = useState<boolean>(globalProps.isPicEditShow);//设置是否显示图像编辑框
    const [isTextEditShow, setIsTextEditShow] = useState<boolean>(globalProps.isTextEditShow);//设置是否显示文字编辑框
    const [idstate, setIdstate] = useState<string>(globalProps.idstate);//设置idstate
    
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