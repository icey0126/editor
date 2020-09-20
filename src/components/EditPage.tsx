import React,{FormEvent,useContext,useState}  from 'react'
import {TestContext} from '../App'

interface IElementProps{
    id:string,
    type:string,
    content:string
}

const EditPage:React.FC<any> = (props) =>{
    const globalProps = useContext(TestContext);
    const [elementContent, setElementContent] = useState<IElementProps[]>(globalProps._elementContent);
    const [isDeleteShow, setIsDeleteShow] = useState<boolean>(globalProps.isDeleteShow);//设置是否显示删除编辑框
    const [isPicEditShow, setIsPicEditShow] = useState<boolean>(globalProps.isPicEditShow);//设置是否显示图像编辑框
    const [isTextEditShow, setIsTextEditShow] = useState<boolean>(globalProps.isTextEditShow);//设置是否显示文字编辑框

    //预览所有元素
    const preview = (e:FormEvent<HTMLButtonElement>) => {
        //bootbox展示elementContent的所有内容 map遍历
    };
    
    //保存所有元素
    const saveAll = (e:FormEvent<HTMLButtonElement>) => {
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
            <h3>文件操作</h3>
            <div className="btn-group">
            <button onClick={preview} className="btn btn-default">预览</button>
            <button onClick={saveAll} className="btn btn-default">保存</button>
            <button onClick={deleteAll} className="btn btn-default">清空</button>
            </div>
        </div>
    )
}

export default EditPage