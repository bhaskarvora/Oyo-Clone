// import connectDB from "@/db";
// import Hotel from "@/models/hotel-model";




// export default async function handler(req,res)
// {
//     connectDB();

//     if(req.method === "GET")
//         {

//             // By using .distinct method we will get the unique array 
//             const facilities = await Hotel.find({}).distinct('facilities.name');
//             res.status(200).json({msg:"Good!", facilities});
//         }
// }

import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === "GET") {
      // By using .distinct method we will get the unique array
      const facilities = await Hotel.find({}).distinct("facilities.name");
      res.status(200).json({ msg: "Good!", facilities });
    } else {
      res.status(405).json({ msg: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error fetching facilities:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
}
