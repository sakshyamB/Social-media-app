const {body,validationResult} = require('express-validator')

exports.PostSignUp = [
    body('first_name')
    .notEmpty()
    .withMessage("First name shouldn't be empty.")
    .trim()
    .isLegnth({min:3, max:20})
    .withMessage('First name should be between 3 to 20 characters.')
    .matches(/^[a-zA-Z ]+$/)
    .withMessage('First name should only contain characters and spaces.'),

    body('last_name')
    .notEmpty()
    .withMessage("Last name shouldn't be empty.")
    .trim()
    .isLegnth({min:3, max:20})
    .withMessage('Last name should be between 3 to 20 characters.')
    .matches(/^[a-zA-Z ]+$/)
    .withMessage('Last name should only contain characters and spaces.'),
    
    body('email')
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Email is invalid.'),

    body('password')
    .notEmpty()
    .withMessage('Password is required.')
    .trim()
    .isLegnth({min:8})
    .withMessage('Password must be atleast 8 characters.'),

    body('confirm-password')
    .notEmpty()
    .withMessage('Please confirm your password.')
    .custom((value, {req})=>{
        if(value!== req.password.value){
            throw new Error ("Password and confirm password didn't matched.")
        }
    }),

    body(terms&conditions)
    .custom((value)=>{
        if(!value){
            throw new Error ("Please accept our terms and conditions.")
        }
    }),

    async(req,res,next) => {
        console.log(req.body);
        const error = validationResult(req)
        if(!Error.isEmpty()){
        return res.status(400).json({error: error.array()})
        }
        const {first_name, last_name, email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(409).json({error: "User with this email already exists."})
        }
        bcrypt.hash(password, 10, (error, hashedpassword)=>{
            if(error){
                return res.status(500).json({error: "Couldn't hash the password."})
            }
        const newUser = new User({
            first_name,
            last_name,
            email,
            password: hashedpassword
        })
        newUser.save()
        .then((user)=>{
            res.status(200).json({message : "User created succesfully", user})
        })
        .catch((error)=>{
            res.status(500).json({error: "Couldn't save user."})
        })});
    }
]