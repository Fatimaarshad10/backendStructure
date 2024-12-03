// Init
const { check, validationResult } = require("express-validator");

/*
====================
Validations
====================
*/

// USER VALIDATORS
exports.registerUserValidator = [
  check("email", "Email is required.")
    .notEmpty()
    .isEmail()
    .trim()
    .normalizeEmail({
      gmail_remove_dots: false,
      gmail_remove_subaddress: false,
      yahoo_remove_subaddress: false,
      outlookdotcom_remove_subaddress: false,
    }),
  check("password", "Password is required.")
    .notEmpty()
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password min length must be 6 characters"),
  check("first_name", "First Name is required").notEmpty().trim(),
  check("last_name", "Last Name is required").notEmpty().trim(),

];



/*
======================
Result
======================
*/
exports.isValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = errors.array()[0].msg;
    res.status(400).send({ message });
  } else {
    next();
  }
};

