export default {
  state:{
    count:0
  },
  reducers:{
    changeNum(state,action){
      console.log(state,action)
      return {...state,count:action.payload.count}
    }
  },
  effects:{
      *changeEffect({payload},a){
        yield a.put({
          type:'changeNum',
          payload
        })
      }
  },
  subscriptions:{
    setup({dispatch,history}){
    }
  }
}
