
const sendErrorDev= (err,res)=>{
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
        error:err,
        stack:err.stack
       })
}


export const  globalErrorHandler = (err,req ,res ,next)=>{ 
    err.statusCode = err.statusCode || 500 ;
    err.status=err.status||"error";
    console.log(err.status,err.message
        //,err.stack
        )
    sendErrorDev(err,res)


    
    
}

