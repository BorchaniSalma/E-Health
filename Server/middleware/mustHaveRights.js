import AppError from "../Utils/appError.js";

export const mustHaveRights = (rights) => {
    return (req, res, next) => {
        if (
            !rights.every((right) =>
                req.user.role.rights.some(
                    (userRight) => userRight.name == right
                )
            )
        ) {
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
