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
      case 'editPic':{
        const { payload } = action;
        return {...state,
          isDeleteShow:[...state.isDeleteShow,payload.isDeleteShow],
          isTextEditShow:[...state.isTextEditShow,payload.isTextEditShow],
          isPicEditShow:[...state.isPicEditShow,payload.isPicEditShow],
          picvalue:[...state.picvalue,payload.picvalue],
          idstate:[...state.idstate,payload.idstate]
        };
      }
      case 'editTxt':{
        const { payload } = action;
        return {...state,
          isDeleteShow:[...state.isDeleteShow,payload.isDeleteShow],
          isTextEditShow:[...state.isTextEditShow,payload.isTextEditShow],
          isPicEditShow:[...state.isPicEditShow,payload.isPicEditShow],
          txtvalue:[...state.txtvalue,payload.txtvalue],
          idstate:[...state.idstate,payload.idstate]
        };
      }
      case 'txtChange':{
        const { payload } = action;
        return {...state,
          txtvalue:[...state.txtvalue,payload.txtvalue],
          _elementContent:[...state._elementContent,payload._elementContent]
        };
      };
      case 'picChange':{
        const { payload } = action;
        return {...state,picvalue:[...state.picvalue,payload.picvalue]};
      };
      case 'savePic':{
        const { payload } = action;
        return {...state,_elementContent:[...state._elementContent,payload]};
      };
      case 'deleteEl':{
        const { payload } = action;
        return {...state,
          _elementContent:[...state._elementContent,payload._elementContent],
          isDeleteShow:[...state.isDeleteShow,payload.isDeleteShow],
          isTextEditShow:[...state.isTextEditShow,payload.isTextEditShow],
          isPicEditShow:[...state.isPicEditShow,payload.isPicEditShow]   
        };
      }
      case 'deleteAll':{
        const { payload } = action;
        return {...state,
          _elementContent:[...state._elementContent,payload._elementContent],
          isDeleteShow:[...state.isDeleteShow,payload.isDeleteShow],
          isTextEditShow:[...state.isTextEditShow,payload.isTextEditShow],
          isPicEditShow:[...state.isPicEditShow,payload.isPicEditShow]   
        };
      }
      case 'makeBorderShow': {
        const { payload } = action;
        return {...state,_elementContent:[...state._elementContent,payload]};
      } 
      case 'hideBorderShow': {
        const { payload } = action;
        return {...state,_elementContent:[...state._elementContent,payload]};
      } 
      default:
          throw new Error();
  }
}

export default reducer;