import {AppError} from "../Utils/appError.js";

export const restrictToRole = (...roles) => {
    return (req, res, next) => {
        // roles ['admin', 'lead-guide']. role='user'
        if (!req.user.role || !roles.includes(req.user.role.name)) {
            return next(
                new AppError(
                    "You do not have permission to perform this action",
                    403
                )
            );
        }

        next();
    };
};
