
const sendError= (err,res)=>{
    res.status(err.statusCode).json({
        message:err.message,
        error:err,
        stack:err.stack
       })
}




export default fn= (err,req ,res ,next)=>{ 
    err.statusCode = err.statusCode || 500 ;
    err.status=err.status||"error";
    sendError(err,res)
    
}

