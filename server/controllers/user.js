import { asyncError } from "../middlewares/error.js"
import { User } from "../models/user.js"
import ErrorHandler from "../utils/error.js"
  
 export const login = asyncError(async (req,res,next)=>{

    const { email, password } = req.body

    const user = await User.findOne({email}).select("+password")


    const isMatched = await user.comparePassword(password)

    if (!user) {
        return next(new ErrorHandler("Incorrect Email or Password", 400));
      }
    
      if (!password) return next(new ErrorHandler("Please Enter Password", 400));

      if (!isMatched) {
        return next(new ErrorHandler("Incorrect Email or Password", 400));
      }

    res.status(200).json({
        success: true,
        message: `Welcome back, ${user.name}`,
    })
})

export const signup = async(req,res,next)=>{

    const { name, email, password, address, city, country, pinCode } = req.body


    await User.create({
        name, email, password, address, city, country, pinCode,
    })
    res
    .status(200)
    .cookie("token", token,{
      expires: new Date(Date.now()+15*24*60*1000),
    })
    .json({
      success: true,
      message: `Welcome Back, ${user.name}`,
    });
}

