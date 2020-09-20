import React,{createContext,useEffect,useState} from 'react';
import './App.css';
import AddElement from './components/AddElement';
import EditPage from './components/EditPage';
import ShowElement from './components/ShowElement';
import DeleteElement from './components/DeleteElement';
import ChangeElement from './components/ChangeElement';
import TestAll from './components/TestAll';
import { v4 as uuidv4 } from 'uuid';

interface IElementProps{
  id:string,
  type:string,
  content:string
}

const _elementContent:Array<IElementProps>=[
  {id:'',type:'',content:''}
]

const initialPic = {
  id:uuidv4(),
  type:'pic',
  content:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
}

const initialTxt = {
  id:uuidv4(),
  type:'txt',
  content:'empty text'
}

const isPicEditShow:boolean = false;
const isTextEditShow:boolean  = false;
const isDeleteShow:boolean  = false;
const idstate:string  = '';
const picvalue:string  = initialPic.content;
const txtvalue:string  = initialTxt.content;

const globalProps={
  _elementContent,
  isPicEditShow,
  isTextEditShow,
  isDeleteShow,
  idstate,
  picvalue,
  txtvalue,
  initialPic,
  initialTxt
}

export const TestContext = createContext(globalProps);

function App() {
  const [elementContent, setElementContent] = useState<IElementProps[]>(_elementContent);
  //检查localstorage
  useEffect(() => {
    let elementList = localStorage.getItem('elementContent');
    if(elementList){
        setElementContent([...JSON.parse(elementList)])
    }
  }, [])

  return (
    <div className="App">
      <TestAll/>
      {/* <TestContext.Provider value={globalProps}>
      <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-2'>
              <EditPage/>
              <hr/>
              <AddElement/>
              </div>
              <ShowElement/>
              <div className='col-xs-4 text-left'>
              <h3>元素操作</h3>
              <DeleteElement/>
              <hr/>
              <ChangeElement/>
              </div>
            </div>
      </div>
      </TestContext.Provider> */}
    </div>
  );
}

export default App;
