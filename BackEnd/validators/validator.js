const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(3)
    .max(30)
    .required()
    .messages({
      "string.pattern.base":
        "Username can only contain letters, numbers, underscores, dots, or dashes.",
    }),

  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: false } })
    .required(),

  password: Joi.string()
    .min(4)
    .max(128)
    .pattern(new RegExp("(?=.*[a-z])"))
    .pattern(new RegExp("(?=.*[A-Z])"))
    .pattern(new RegExp("(?=.*[0-9])"))
    .pattern(new RegExp("(?=.*[!@#$%^&*])"))
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain uppercase, lowercase, number, and special character.",
    }),
});


const loginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Please enter a valid email address.',
    }),

  password: Joi.string()
    .min(8)
    .max(128)
    .required()
    .messages({
      'string.empty': 'Password is required.',
      'string.min': 'Password must be at least 8 characters.',
    }),
});


const createProductSchema = Joi.object({
  user_id: Joi.number().integer().min(1),
  name: Joi.string()
    .trim()
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.empty': 'Product name is required.',
      'string.min': 'Product name must be at least 3 characters long.',
      'string.max': 'Product name must be at most 100 characters long.',
    }),

  description: Joi.string()
    .trim()
    .min(10)
    .max(1000)
    .required()
    .messages({
      'string.empty': 'Description is required.',
      'string.min': 'Description must be at least 10 characters.',
      'string.max': 'Description must be under 1000 characters.',
    }),

  price: Joi.number()
    .max(1000000)
    .precision(2)
    .positive()
    .required()
    .messages({
      'number.base': 'Price must be a number.',
      'number.positive': 'Price must be greater than 0.',
    }),

  quantity: Joi.number()
    .max(1000000)
    .integer()
    .min(0)
    .required()
    .messages({
      'number.base': 'Quantity must be a number.',
      'number.integer': 'Quantity must be an integer.',
      'number.min': 'Quantity cannot be negative.',
    }),

  image: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': 'Image must be a valid URL.',
    }),
});


module.exports = {
  registerSchema,
  loginSchema,
  createProductSchema
};
