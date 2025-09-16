
// import user from "../module/user.module.js";

// export const signup=async (req,res)=>{
//     try{
//         const {fullname,email,password}=req.body;
//         const User=await user.findOne({email})
//         if(User)
//         {
//            return res.status(400).json({massage:"user already exists"});
//         }
//         const createUser=new User({
//             fullname,
//             email,
//             password
//         })
//        await createUser.save()
//         res.status(201).json({massage:"user create successfully"})


//     }
//     catch(error)
//     {
// console.log("error:"+error.massage);
// res.status(500).json({massage:"Internal server error"})
//     }



// catch (error) {
//     console.log("error:", error);
//     res.status(500).json({ error: error.message });
//   }
// }


import bcryptjs from "bcryptjs"

import User from "../module/user.module.js";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists",
        user: {
      _id: existingUser._id,
      fullname: existingUser.fullname,
      email: existingUser.email
    }
       });
    }
            const hashpassword=await bcryptjs.hash(password,10)

    const createUser = new User({
      fullname:fullname,
      email:email,
      password:hashpassword
    });

    await createUser.save();

    res.status(201).json({ message: "User created successfully",
      user: {
    _id: createUser._id,
    fullname: createUser.fullname,
    email: createUser}
      
     });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: error.message });
  }
};
export const login=async(req,res)=>
{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
          
         if(!user || !isMatch)
         {
            return res.status(400).json({massage:"invalide username and password"})
         }
         else{
            res.status(200).json({massage:"login successful",user:
                {
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email
                }
            })

         }
    }
    catch(error)
    {
       console.log("error:", error);
    res.status(500).json({ error: error.message });
    }
}