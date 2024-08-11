import Joi from "joi";

export const contactValidationSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string base': 'Name should be a string',
        'string min': 'Name should be at least {#limit}',
        'string max': 'Name should be at most {#limit}',
        'any.required': 'Name should be exists',
    }),
    phoneNumber: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().optional(),
    isFavourite: Joi.boolean().optional(),
    contactType: Joi.string().min(3).max(20).required(),
});

export const updateContactValidationSchema = Joi.object({
  name: Joi.string().min(3).max(20).optional(),
  phoneNumber: Joi.string().min(3).max(20).optional(),
  email: Joi.string().email().optional(),
  isFavourite: Joi.boolean().optional(),
  contactType: Joi.string().min(3).max(20).optional(),
}).or('name', 'phoneNumber', 'email', 'isFavourite', 'contactType');
