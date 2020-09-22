import { v4 as uuidv4 } from 'uuid';

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

const reducer = (state:any, action:any) => {
  console.log('action:', action)
  switch (action.type) {
      case 'addPic': {
        const { payload } = action;
        return {...state,_elementContent:[...state._elementContent,...payload]};
      } 
      case 'addTxt':{
        const { payload } = action;
        return {...state,_elementContent:[...state._elementContent,...payload]};
      }
      default:
          throw new Error();
  }
}

export default reducer;