const reducer = (state:any, action:any) => {
  //console.log('action:', action)
  switch (action.type) {
      case 'addPic': {
        const { payload } = action; //list需要新加数据
        return {...state,_elementContent:[...state._elementContent,...payload]};
      } 
      case 'addTxt':{
        const { payload } = action; //list需要新加数据
        return {...state,_elementContent:[...state._elementContent,...payload]};
      }
      case 'editPic':{ //改变数据
        const { payload } = action;
        return {...state,...payload};
      }
      case 'editTxt':{ //改变数据
        const { payload } = action;
        return {...state,...payload};
      }
      case 'txtChange':{ //改变数据
        const { payload } = action;
        return {...state,...payload};
      };
      case 'picChange':{ //改变数据
        const { payload } = action;
        return {...state,...payload};
      };
      case 'savePic':{ //改变数据
        const { payload } = action;
        return {...state,...payload};
      };
      case 'deleteEl':{ //改变数据
        const { payload } = action;
        return {...state,...payload};
      }
      case 'deleteAll':{ //改变数据
        const { payload } = action;
        return {...state,...payload};
      }
      case 'makeBorderShow': { //改变数据
        const { payload } = action;
        return {...state,...payload};
      } 
      case 'hideBorderShow': { //改变数据
        const { payload } = action;
        return {...state,...payload};
      } 
      default:
          throw new Error();
  }
}

export default reducer;