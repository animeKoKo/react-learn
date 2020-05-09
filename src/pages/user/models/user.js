import service from '@/service/user'
export default {
  state:{
    list:[]
  },
  reducers:{
    init(state,{payload}){
      let data={...state,list:payload.list}
      return data
    },

    add(state,{payload}){
      let newlist=[...state.list]
      newlist.push(payload)
      return {list:newlist}
    },

    update(state,{payload}){
      let newlist=[...state.list]
      let {index,item}=payload
      newlist.splice(index,1,item)
      return {list:newlist}
    },

    del(state,{payload}){
      let newlist=[...state.list]
      let {index}=payload
      newlist.splice(index,1)
      return {list:newlist}
    }
  },
  effects:{
      *post({payload},{call,put}){
        yield call(service.user.add,{name:payload.name,age:payload.age})

        yield put({
          type:'add',
          payload
        })
      },
    *get({payload},{call,put}){
      let {data}=yield call(service.user.get)
      yield put({
        type:'init',
        payload:{list:data}
      })
    }
  },
  subscriptions:{
      setup({dispatch,history}){
        if(history.location.pathname==='/user'){
          dispatch({
            type:'get'
          })
        }
      }
  }
}
