import { User } from "../models/user.js"
  
 export const login = async (req,res,next)=>{

    const { email, password } = req.body

    const user = await User.findOne({email}).select("+password")


    const isMatched = await user.comparePassword(password)

    if(!isMatched){
        return res.status(400).json({success: false, message: "Incorrect password"})
    }

    res.status(200).json({
        success: true,
        message: `Welcome back, ${user.name}`,
    })
}

export const signup = async(req,res,next)=>{

    const { name, email, password, address, city, country, pinCode } = req.body


    await User.create({
        name, email, password, address, city, country, pinCode,
    })
    res.status(201).json({
        success: true,
        message: "Registered Successfully",
    })
}

