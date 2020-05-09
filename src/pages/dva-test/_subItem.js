import { connect } from 'dva'
function SubList({dispatch,count}) {

  return (
    <>
      <button onClick={()=>dispatch({type:'fooGlobal/changeEffect',payload:{count:++count}})}>子组件 触发 +</button>
      <button onClick={()=>dispatch({type:'fooGlobal/changeNum',payload:{count:--count}})}>子组件 触发 -</button>
    </>
  )
}

const mapStateToProps=({fooGlobal})=>{

  return fooGlobal
}

export default connect(mapStateToProps)(SubList)
