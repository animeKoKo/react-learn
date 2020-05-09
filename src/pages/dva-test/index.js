import {connect} from 'dva'
import styles from './index.scss';
import SubList from '@/pages/dva-test/_subItem';
function DvaTest(props) {
  let {count,dispatch}=props
  return (
    <div className={styles.normal}>
      <button onClick={()=>dispatch({type:'fooGlobal/changeNum',payload:{count:++count}})}>+</button>
      <h1>model num:{count}</h1>
      <button onClick={()=>dispatch({type:'fooGlobal/changeNum',payload:{count:--count}})}>-</button>
      <hr/>
      <SubList/>
    </div>
  );
}
const mapStateToProps=({fooGlobal})=>{

  return fooGlobal
}


export default connect(mapStateToProps)(DvaTest)
