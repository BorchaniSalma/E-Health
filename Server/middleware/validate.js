import { BadRequestError } from "../errors/http.js";

const validate = (field, schema) => {
    const { value, error } = schema.validate(field);
    if (error)
        throw new BadRequestError({ userMessage: error.details?.[0]?.message });
    return value;
};

export const validateField = (field, schema) => (req, res, next) => {
    req[field] = validate(req[field], schema);
    next();
};

export const validateQuery = (schema) => validateField("query", schema);
export const validateParams = (schema) => validateField("params", schema);
export const validateBody = (schema) => validateField("body", schema);
