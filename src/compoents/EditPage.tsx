import React,{FormEvent,useContext}  from 'react'
import {TestContext} from '../App'

interface EditPageProps{
    textContent?:Array<string>
}

const EditPage:React.FC<EditPageProps> = (props) =>{
    const {textContent} = props;

    const showBox = (e: FormEvent<HTMLButtonElement>) => {
        alert('showbox');
    };
    const save = (e: FormEvent<HTMLButtonElement>) => {
        alert('save');
    };
    const empty = (e: FormEvent<HTMLButtonElement>) => {
        alert('empty');
    };
    return(
        <div>
            <h4>文档操作</h4>
            <button onClick={showBox}>预览</button>
            <button onClick={save}>保存</button>
            <button onClick={empty}>清空</button>
        </div>
    )
}

export default EditPage