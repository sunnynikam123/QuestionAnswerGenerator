const mongoose = require('mongoose');


mongoose.connect(process.env.conn).then(()=>{
    console.log('db connection sucess')
}).catch((e)=>{
    console.log(e)
})