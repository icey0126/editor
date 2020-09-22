import React,{FormEvent,useContext,useState}  from 'react'
import { Modal, Button } from 'antd';
import { AppContext } from '../context';

const EditPage:React.FC<any> = (props) =>{
    const { state: globalProps, dispatch } = useContext(AppContext);
    const { _elementContent: elementContent } = globalProps;
    const [isModalShow, setIsModalShow] = useState<boolean>(false);//模态框默认值

    //预览所有元素
    const preview = (e:FormEvent<HTMLButtonElement>) => {
        setIsModalShow(true);
    };
    
    //保存所有元素
    const saveAll = (e:FormEvent<HTMLButtonElement>) => {
        localStorage.setItem('elementContent',JSON.stringify(elementContent));
    };
    
    //清空所有元素
    const deleteAll = (e:FormEvent<HTMLButtonElement>) => {
        localStorage.removeItem('elementContent');
        const newSate ={
            _elementContent:[],
            isDeleteShow:false,
            isTextEditShow:false,
            isPicEditShow:false
        }
        dispatch({
            type: 'deleteAll',
            payload: newSate
        })
    };

    return(
        <div>
            <h3>文件操作</h3>
            <div className="btn-group">
            <button onClick={preview} className="btn btn-default">预览</button>
            <button onClick={saveAll} className="btn btn-default">保存</button>
            <button onClick={deleteAll} className="btn btn-default">清空</button>
            </div>     
            <Modal
            title="预览内容"
            centered = {true}
            visible={isModalShow}
            onOk={() => {setIsModalShow(false); }}
            onCancel={() => {setIsModalShow(false);}}
            >
            {
                elementContent.map((el,i)=>{
                    if(el.type ==="pic") return (<div key={el.id} ><img key={i} src={el.content} alt="loading error" className='img-responsive'/></div>)
                    else if(el.type ==="txt") return (<div key={el.id} ><p>{el.content}</p></div>)
                })  
            }
            </Modal>
        </div>
    )
}

export default EditPage