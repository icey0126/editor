import React,{createContext,useEffect,useState,useReducer} from 'react';
import './App.css';
import { AppProvider } from './context';
import TestAll from './components/TestAll';
import AddElement from './components/AddElement';
import ChangeElement from './components/ChangeElement';
import DeleteElement from './components/DeleteElement';
import EditPage from './components/EditPage';
import ShowElement from './components/ShowElement';


function App() {
  return (
    // <TestAll/>
    <AppProvider>
      <div className="App">
      <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-2'>
              <EditPage />
              <hr />
              <AddElement />
              </div>
              <ShowElement />
              <div className='col-xs-4 text-left'>
              <h3>元素操作区</h3>
              <DeleteElement />
              <hr />
              <ChangeElement />
              </div>
            </div>         
        </div>
      </div>
    </AppProvider>
    
  );
}

export default App;
