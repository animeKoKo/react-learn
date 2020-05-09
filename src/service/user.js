import fetch from '@/utils/fetch';
export default {
  user:{
    async add({name,age}){
      return await fetch.post('/api/addUsers',{name,age});
    },
    async get(){
      return await fetch.get('/api/getUsers');
    }
  }
}
