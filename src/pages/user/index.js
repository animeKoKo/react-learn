import { List, Button } from 'antd';
import { connect } from 'dva';

const User = ({ dispatch, list }) => {

  return (
    <div className='user-box'>
      <List
        size="small"
        header={<div>
          用户表 <Button onClick={() => {
          dispatch({
              type: 'user/post', payload: {
                name: 'add' + Math.random().toFixed(2),
                age: Math.random().toFixed(2),
              },
            },
          );
        }}>添加</Button>
        </div>}
        bordered
        dataSource={list}
        renderItem={(item,key) =>
          <List.Item
            actions={[<Button type='link'
                              onClick={()=>{dispatch({type:'user/update',payload:{index:key,item:{name:'update'+Math.random().toFixed(2),age:item.age}}})}}>修改</Button>,
              <Button type='link' onClick={()=> dispatch({type:'user/del',payload:{index:key}})}>删除</Button>]}
          >
            <div>{item.name}</div>
            <div>{item.age}</div>
          </List.Item>}
      />
    </div>
  );
};

const mapStateToProps = ({ user }) => {

  return { list: user.list };
};

export default connect(mapStateToProps)(User);
