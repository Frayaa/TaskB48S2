import Joi = require("joi");

export const registerSchema = Joi.object().keys({
    full_name: Joi.string().required(),
    username: Joi.string().required().min(4).max(10),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8).max(50)
})

export const loginSchema = Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8).max(50)
})