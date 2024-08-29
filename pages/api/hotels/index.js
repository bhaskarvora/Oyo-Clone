// import connectDB from "@/db"
// import Hotel from "@/models/hotel-model";





// export default async function handler(req,res)
// {
//     connectDB();

//     // if(req.method ==="POST")
//     //     {
//     //         const newHotel = new Hotel(req.body);
//     //         const result = await newHotel.save();5
//     //         res.status(201).json({msg:'Hotel added !', result});
//     //     }



//     if(req.method==="GET")
//         {

//             // http://localhost:3000/api/hotels?city=Banglore 
//             // This query will search the hotel according to that city

//             const hotels = await Hotel.find({location:req.query.city});
//             if(hotels.length > 0 )
//                 {
//             return res.status(200).json({msg: "Good", hotels});
//                 }


//                 // in the below query whatever you will type in city it will print all the hotels
//                 const allhotels = await Hotel.find({});

//                 return res.status(200).json({msg:"Good", allhotels});

//         }
// }


import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === "GET") {
      if (req.query.city) {
        // Search hotels by city if query parameter 'city' is provided
        const hotels = await Hotel.find({ location: req.query.city });
        if (hotels.length > 0) {
          return res.status(200).json({ msg: "Good", hotels });
        } else {
          return res.status(404).json({ msg: "No hotels found for this city" });
        }
      } else {
        // Return all hotels if no specific city query parameter is provided
        const allHotels = await Hotel.find({});
        return res.status(200).json({ msg: "Good", hotels: allHotels });
      }
    } else {
      // Handle other HTTP methods if needed
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ msg: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
}
