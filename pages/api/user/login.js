// import User from "@/models/user-model";
// import connectDB from "@/db";

// import bcrypt from  "bcrypt";
// import jwt from "jsonwebtoken";


// export default async function handler(req,res)
// {
//     if(req.method === "POST")
//         {
//             connectDB();
//             const {email, password, } = req.body;

//             if(!email || !password)
//                 {
//                     return res.status(400).json({msg:"Email and Password Required"});
//                 }

//                 const emailExists = await User.findOne({email});

//                 if(!emailExists)
//                     {
//                         return res.status(400).json({msg:"Please Register First"});
//                     }

//                 const passwordMatched = await bcrypt.compare(password, emailExists.password);
//                 if(!passwordMatched)
//                     {
//                         return res.status(400).json({msg:"Invalid Credentials"});
//                     }


//                 const token = jwt.sign({token:emailExists._id},process.env.JWT_SECRET, {expiresIn:'30d'});

//                 res.status(200).json({msg: "Logged in Successfully!", token});

//         }
// }

import User from "@/models/user-model";
import connectDB from "@/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();

    const { email, password } = req.body;

    try {
      if (!email || !password) {
        return res.status(400).json({ msg: "Email and Password are required" });
      }

      // Check if the user exists in the database
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "User does not exist. Please register first." });
      }

      // Validate the password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(400).json({ msg: "Invalid credentials. Please try again." });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

      res.status(200).json({ msg: "Logged in successfully!", token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ msg: "Server error. Please try again later." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
