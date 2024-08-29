import Image from "next/image"
import Link from "next/link"

const Hotel = ({e}) => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-90 w-full mb-5 p-5"> 
    <div className="flex">
        <Image src={e?.banner} alt="hotel" width={200} height={200}
        className="w-96 h-65 mr-3"/>


        <div className="flex flex-col justify-between">
        {
          e ? e.gallery?.map((ele)=>{
            return(
          <Image
          key = {ele}
          src={ele}  alt="hotel" width={200} height={200}
              className="w-28 h-16 object-cover "/>
            )
          }):""
        }
        
        </div>

        <div className="ml-20">
            <h2 className="font-bold text-3xl line-clamp-1">{e?.name}</h2>
            <p className="text-justify my-5 text-lg"> {e?.description}  </p>
            <div className=" text-2xl my-5">
                <span className="font-bold">Facilities: </span>
                <ul className="flex">
                  {
                    e ? e.facilities?.map((ele)=>{
                      return(
                        
                          <li key = {ele.name} className="mr-10 mb-3 flex items-center"><span><Image src={ele.img} width={200} height={200} className="w-8 h-8 rounded-full"/></span><span className="ml-5">{ele.name}</span></li>
                          
                      );
                    }):""
                  }
                  </ul>
                  
                
            </div>
            <div className="flex items-center">
                  

            <button className=" w-65 h-14 rounded-lg bg-blue-400 text-lg">Price: &#8377;{e?.price}</button>
            </div>

            <Link href={`/hotels/${e?._id}`} className="text-l font-bold text-red-600 ml-13"> See Details</Link>
            
        </div>
    </div>
    
    </div>
  )
}

export default Hotel;

// import Image from "next/image";
// import Link from "next/link";

// const Hotel = ({ e }) => {
//   return (
//     <div className="border-2 border-red-500 rounded-lg h-90 w-full mb-5 p-5">
//       <div className="flex">
//         <Image
//           src={e?.banner}
//           alt="hotel"
//           width={200}
//           height={200}
//           className="w-96 h-65 mr-3"
//         />

//         <div className="flex flex-col justify-between">
//           {e ? e.gallery?.map((ele) => {
//             return (
//               <Image
//                 key={ele}
//                 src={ele}
//                 alt="hotel"
//                 width={200}
//                 height={200}
//                 className="w-28 h-16 object-cover"
//               />
//             );
//           }) : ""}
//         </div>

//         <div className="ml-20">
//           <h2 className="font-bold text-3xl line-clamp-1">{e?.name}</h2>
//           <p className="text-justify my-5 text-lg"> {e?.description} </p>
//           <div className="text-2xl my-5">
//             <span className="font-bold">Facilities: </span>
//             <ul className="flex">
//               {e ? e.facilities?.map((ele) => {
//                 return (
//                   <li key={ele.name} className="mr-10 mb-3 flex items-center">
//                     <span>
//                       <Image
//                         src={ele.img}
//                         width={200}
//                         height={200}
//                         className="w-8 h-8 rounded-full"
//                       />
//                     </span>
//                     <span className="ml-5">{ele.name}</span>
//                   </li>
//                 );
//               }) : ""}
//             </ul>
//           </div>
//           <div className="flex items-center">
//             <button className="w-65 h-14 rounded-lg bg-blue-400 text-lg">
//               Price: &#8377;{e?.price}
//             </button>
//           </div>
//           <Link href={`/hotels/${e?._id}`} className="text-l font-bold text-red-600 ml-13">
//             See Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hotel;



// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Image from "next/image";
// import Link from "next/link";

// const Hotel = ({ e }) => {
//   const [csrfToken, setCsrfToken] = useState('');

//   useEffect(() => {
//     const fetchCsrfToken = async () => {
//       try {
//         const response = await axios.get('/api/csrf-token');
//         setCsrfToken(response.data.csrfToken);
//       } catch (error) {
//         console.error('Error fetching CSRF token:', error);
//       }
//     };

//     fetchCsrfToken();
//   }, []);

//   const handleBooking = async () => {
//     try {
//       await axios.post('/api/hotels/booking', {
//         hotelId: e?._id
//       }, {
//         headers: {
//           'x-csrf-token': csrfToken
//         }
//       });
//       alert('Booking successful');
//     } catch (error) {
//       console.error('Error making booking:', error);
//       alert('Booking failed');
//     }
//   };

//   return (
//     <div className="border-2 border-red-500 rounded-lg h-90 w-full mb-5 p-5">
//       <div className="flex">
//         <Image
//           src={e?.banner}
//           alt="hotel"
//           width={200}
//           height={200}
//           className="w-96 h-65 mr-3"
//         />

//         <div className="flex flex-col justify-between">
//           {e ? e.gallery?.map((ele) => {
//             return (
//               <Image
//                 key={ele}
//                 src={ele}
//                 alt="hotel"
//                 width={200}
//                 height={200}
//                 className="w-28 h-16 object-cover"
//               />
//             );
//           }) : ""}
//         </div>

//         <div className="ml-20">
//           <h2 className="font-bold text-3xl line-clamp-1">{e?.name}</h2>
//           <p className="text-justify my-5 text-lg"> {e?.description} </p>
//           <div className="text-2xl my-5">
//             <span className="font-bold">Facilities: </span>
//             <ul className="flex">
//               {e ? e.facilities?.map((ele) => {
//                 return (
//                   <li key={ele.name} className="mr-10 mb-3 flex items-center">
//                     <span>
//                       <Image
//                         src={ele.img}
//                         width={200}
//                         height={200}
//                         className="w-8 h-8 rounded-full"
//                       />
//                     </span>
//                     <span className="ml-5">{ele.name}</span>
//                   </li>
//                 );
//               }) : ""}
//             </ul>
//           </div>
//           <div className="flex items-center">
//             <button className="w-65 h-14 rounded-lg bg-blue-400 text-lg">
//               Price: &#8377;{e?.price}
//             </button>
//           </div>
//           <button onClick={handleBooking} className="text-l font-bold text-red-600 ml-13">
//             See Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hotel;


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// import Link from 'next/link';

// const Hotel = ({ e }) => {
//   const [csrfToken, setCsrfToken] = useState('');

//   useEffect(() => {
//     const fetchCsrfToken = async () => {
//       try {
//         const response = await axios.get('/api/csrf-token');
//         setCsrfToken(response.data.csrfToken);
//       } catch (error) {
//         console.error('Error fetching CSRF token:', error);
//       }
//     };

//     fetchCsrfToken();
//   }, []);

//   const handleBooking = async () => {
//     try {
//       await axios.post('/api/hotels/booking', {
//         hotelId: e?._id
//       }, {
//         headers: {
//           'x-csrf-token': csrfToken
//         }
//       });
//       alert('Booking successful');
//     } catch (error) {
//       console.error('Error making booking:', error);
//       alert('Booking failed');
//     }
//   };

//   return (
//     <div className="border-2 border-red-500 rounded-lg h-90 w-full mb-5 p-5">
//       <div className="flex">
//         <Image
//           src={e?.banner}
//           alt="hotel"
//           width={200}
//           height={200}
//           className="w-96 h-65 mr-3"
//         />

//         <div className="flex flex-col justify-between">
//           {e ? e.gallery?.map((ele) => (
//             <Image
//               key={ele}
//               src={ele}
//               alt="hotel"
//               width={200}
//               height={200}
//               className="w-28 h-16 object-cover"
//             />
//           )) : ""}
//         </div>

//         <div className="ml-20">
//           <h2 className="font-bold text-3xl line-clamp-1">{e?.name}</h2>
//           <p className="text-justify my-5 text-lg"> {e?.description} </p>
//           <div className="text-2xl my-5">
//             <span className="font-bold">Facilities: </span>
//             <ul className="flex">
//               {e ? e.facilities?.map((ele) => (
//                 <li key={ele.name} className="mr-10 mb-3 flex items-center">
//                   <span>
//                     <Image
//                       src={ele.img}
//                       width={200}
//                       height={200}
//                       className="w-8 h-8 rounded-full"
//                     />
//                   </span>
//                   <span className="ml-5">{ele.name}</span>
//                 </li>
//               )) : ""}
//             </ul>
//           </div>
//           <div className="flex items-center">
//             <button className="w-65 h-14 rounded-lg bg-blue-400 text-lg">
//               Price: &#8377;{e?.price}
//             </button>
//           </div>
//           <button onClick={handleBooking} className="text-l font-bold text-red-600 ml-13">
//             See Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hotel;
