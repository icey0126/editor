import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import reducers from './reducers';

type IElement = {
  id: string;
  type: string;
  content: string;
}

type IGlobalProps = {
  _elementContent: IElement[];
  initialPic: IElement;
  initialTxt: IElement;
  isPicEditShow: boolean;
  isTextEditShow: boolean;
  isDeleteShow: boolean;
  idstate: string;
  picvalue: string;
  txtvalue: string;
}

const globalProps={
  _elementContent:[],
  isPicEditShow:false,
  isTextEditShow:false,
  isDeleteShow:false,
  idstate:'',
  picvalue:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
  txtvalue:'empty text',
  initialPic:{
    id:uuidv4(),
    type:'pic',
    content:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  },
  initialTxt:{
    id:uuidv4(),
    type:'txt',
    content:'empty text'
  }
}


const AppContext = createContext<{
  state: IGlobalProps;
  dispatch: React.Dispatch<any>;
}>({
  state: globalProps,
  dispatch: () => null
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, globalProps);

  

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };