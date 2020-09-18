import React,{createContext,useState,useReducer}from 'react';
import './App.css';
import EditPage from './compoents/EditPage';
import ShowElement from './compoents/ShowElement';
import DeleteElement from './compoents/DeleteElement';
import AddElement from './compoents/AddElement';
import ChangeElement from './compoents/ChangeElement';
import TestReducer from './compoents/TestReducer';
import TestConnect from './compoents/TestConnect';
import TestAll from './compoents/TestAll';


// const elementContent = [
//   {type:"pic",url:"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"},
//   {type:"text",txt:"abcd"},
//   {type:"text",txt:"11111111111"},
//   {type:"pic",url:"https://bkimg.cdn.bcebos.com/pic/55e736d12f2eb938cf4969a2dc628535e5dd6fbd?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg"}
// ]

const elementContent = [
  {type:"pic",url:""},
  {type:"txt",txt:""}
]

// const initialState = {
//   url: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
//   txt: "empty text",
// }

// function reducer(state:typeof initialState, action:any) {
//   switch (action.type) {
//       case 'addpic':
//           return {...state, url:action.url}
//       case 'addtext':
//           return {...state, txt:state.txt}
//       default:
//           throw new Error();
//   }
// }

export const TestContext = createContext(elementContent)

function App() {
  
  return (
    <div className="App">
      <TestContext.Provider value={elementContent}>
        <div className="left">
          {/* <TestReducer/> */}
          {/* <TestConnect/> */}
          <TestAll/> 
          {/* <hr/>
          <EditPage/>
          <hr/>
          <AddElement/> */}
        </div>
        {/* <hr/>
        <div className="middle">
          <ShowElement/>
        </div>
        <hr/>
        <div className="right">
          <DeleteElement/>
          <hr/>
          <ChangeElement/>
        </div> */}
      </TestContext.Provider>
    </div>
  );
}

export default App;
