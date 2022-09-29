import {catchAsync} from "../Utils/catchAsync.js"
import {promisify} from  'util'
import AccountSchema from '../schemas/AccountSchema.js'
import jwt  from 'jsonwebtoken' 
import {AppError} from '../Utils/appError.js' 

export const protect = catchAsync(async(req, res, next) => {
    //1) getting the token 
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) return next(new AppError('Unathorized please log in',401));

    //2) verif token - validate token
    const decoded = await  promisify(jwt.verify)(token, process.env.JWT_SECRET)

   // 3) Check if user still exists
    const currentUser = await AccountSchema.findById(decoded.id).populate({ path: 'role', populate: { path: 'rights' } });
    if (!currentUser) {
     return next(
       new AppError(
         'The user belonging to this token does no longer exist.',
         401
       )
     );
    }

   // 4) Check if user changed password after the token was issued
   if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }     
    //4) GRANT ACCESS TO PROTECTED ROUTE
    if (!currentUser) return next(new AppError(' The user belonging to this token does no longer exist.',401))
    req.user = currentUser;
    next();
});