const mongoose=require ('mongoose');

//direccion base
const URI=process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: 'mongodb://localhost/mernstackPrueba'; 

const msg_init_db="***** DB Iniciada en "+URI;

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log(msg_init_db);
})