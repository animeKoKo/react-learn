export default {
  'GET /api/getUsers': [
    {name:'momoko1',age:12},
    {name:'momoko2',age:12},
    {name:'momoko3',age:12},
    {name:'momoko4',age:12},
  ],
  'POST /api/addUsers': (req,res)=>{
    res.send({
      msg:'ok',
      data:null
    })
  },
}
