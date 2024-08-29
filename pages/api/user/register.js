import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export default async function handler(req,res)
{
    if(req.method === "POST"){

        connectDB();
        const{name,email,password} = req.body;
        if(!name || !email || !password)
            {
                return res.status(400).json({msg:"All Fields are Mandatory!"});
            }


            const emailExists = await User.findOne({email});
            //await User.findOne({email:email});  here key and value both are same so we can write for only one time email

            if(emailExists)
                {
                    return res.status(400).json({msg:"User already Registered"});

                    
                }

                const hashedPassword = await bcrypt.hash(password,10);

                // Here 2nd argument 10 means 10 rounds of hash we can use 12 as well but it takes more time 


                const newUser = new User({
                    name,
                    email,
                    password:hashedPassword,
                });

                const result = await newUser.save();
                const token = jwt.sign({token:result._id}, process.env.JWT_SECRET, {expiresIn:"30d",});

                return res.status(201).json({msg:"Registered Successfully! ", token});
    }
}


// import connectDB from "@/db";
// import User from "@/models/user-model";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//         await connectDB();  // Ensure the database is connected

//         const { name, email, password } = req.body;

//         if (!name || !email || !password) {
//             return res.status(400).json({ msg: "All Fields are Mandatory!" });
//         }

//         const emailExists = await User.findOne({ email });

//         if (emailExists) {
//             return res.status(400).json({ msg: "User already Registered" });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = new User({
//             name,
//             email,
//             password: hashedPassword,
//         });

//         const result = await newUser.save();
//         const token = jwt.sign({ id: result._id }, "Code_BYV", { expiresIn: "30d" });

//         return res.status(201).json({ msg: "Registered Successfully!", token, user: result });
//     } else {
//         res.status(405).json({ msg: "Method not allowed" });
//     }
// }

