import React,{createContext,useEffect,useState} from 'react';
import './App.css';
import AddElement from './components/AddElement';
import EditPage from './components/EditPage';
import ShowElement from './components/ShowElement';
import DeleteElement from './components/DeleteElement';
import ChangeElement from './components/ChangeElement';
import TestAll from './components/TestAll';

interface IElementProps{
  id:string,
  type:string,
  content:string
}

const _elementContent:Array<IElementProps>=[
  {id:'',type:'',content:''}
]
const key = 1;

export const TestContext = createContext(_elementContent);

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
      {/* <TestContext.Provider value={elementContent}>
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
