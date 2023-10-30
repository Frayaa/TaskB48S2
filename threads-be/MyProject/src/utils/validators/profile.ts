import Joi = require("joi");

export const profileSchema = Joi.object().keys({
    full_name: Joi.string(),
    username: Joi.string().min(4).max(10),
    email: Joi.string().email(),
    profile_picture: Joi.string(),
    description: Joi.string()
})