import Joi from "joi";

const carSchema = Joi.object({
  brand: Joi.string()
    .regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
    .required()
    .messages({
      "string.pattern.base":
        "The brand must consist of only characters and be up to 20 characters long.",
    }),
  price: Joi.number().min(0).max(1000000).required(),
  year: Joi.number().min(1990).max(new Date().getFullYear()).required(),
});

export { carSchema };
