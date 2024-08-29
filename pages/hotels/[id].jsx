// // Here name of the file should be having the square bracket it is compulsory

// // How to do dynamic routing for ex: we have named a folder named hotels and moved the hotels.jsx file into that folder and we have to make the [id].jsx file it is compulsory here 

// import Image from "next/image";
// import Head from "next/head";
// import Cookies from "js-cookie";
// import Link from "next/link";


// const SingleHotel = ({hotel}) => {


//   let auth ;
//   if(typeof window !== 'undefined')
//     {
//       auth = Cookies.get('user');
//     }
//   return (

//     <>

//     <Head>
//       <title>{hotel?.name}</title>
//     </Head>
//     <div className="w-7/12 mx-auto my-10">

//     <Image src={hotel?.banner} alt="hotels" width={2000} height={2000}
//         className="w-full h-large-box my-5"/>

//         <div className="">
//             <h3 className="text-3xl font-bold">{hotel?.name}</h3>
//             <p className="text-xl my-5 text-justify">{hotel?.description}</p>
//             <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">Price: &#8377;{hotel?.price}</button>
//             <p  className="text-3xl font-bold my-5">Facilities: </p>
//             <ul className="flex text-xl justify-between">
//               {
//                 hotel ? hotel.facilities?.map((ele)=>{
//                   return(
//                     <li key = {ele.name} className="mr-10 mb-3 flex items-center"><span><Image src={ele.img} width={200} height={200} className="w-8 h-8 rounded-full"/></span><span className="ml-5">{ele.name}</span></li>
//                   )
//                 }):""
//               }
                
//             </ul>
//             {
//               auth ? (<button className=" w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">Book Now</button> )  : ( <span className="text-2xl">Please <Link href={"/login"} className="text-blue-500">Log In</Link>{" "} to get new  Offers !</span>)
//             }
//         </div>
//     </div>

//     </>
//   );
// };



// export async function getServerSideProps(ctx)
// {

//   console.log(ctx.query.id);

//   const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
//   const data = await res.json();

  
//   return{
// props:{
//   hotel:data.hotel,
// },
//   };
// }

// export default SingleHotel

// 'use client';
// import Image from "next/image";
// import Head from "next/head";
// import Cookies from "js-cookie";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const SingleHotel = ({ hotel }) => {
//   const [auth, setAuth] = useState(null);

//   useEffect(() => {
//     setAuth(Cookies.get('user'));
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>{hotel?.name}</title>
//       </Head>
//       <div className="w-7/12 mx-auto my-10">
//         <Image
//           src={hotel?.banner}
//           alt="hotels"
//           width={2000}
//           height={2000}
//           className="w-full h-large-box my-5"
//         />
//         <div>
//           <h3 className="text-3xl font-bold">{hotel?.name}</h3>
//           <p className="text-xl my-5 text-justify">{hotel?.description}</p>
//           <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
//             Price: &#8377;{hotel?.price}
//           </button>
//           <p className="text-3xl font-bold my-5">Facilities:</p>
//           <ul className="flex text-xl justify-between">
//             {hotel
//               ? hotel.facilities?.map((ele) => {
//                   return (
//                     <li key={ele.name} className="mr-10 mb-3 flex items-center">
//                       <span>
//                         <Image
//                           src={ele.img}
//                           width={200}
//                           height={200}
//                           className="w-8 h-8 rounded-full"
//                         />
//                       </span>
//                       <span className="ml-5">{ele.name}</span>
//                     </li>
//                   );
//                 })
//               : ''}
//           </ul>
//           {auth ? (
//             <button className="w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
//               Book Now
//             </button>
//           ) : (
//             <span className="text-2xl">
//               Please{" "}
//               <Link href={"/login"} className="text-blue-500">
//                 Log In
//               </Link>{" "}
//               to get new Offers!
//             </span>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export async function getServerSideProps(ctx) {
//   console.log(ctx.query.id);

//   const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
//   const data = await res.json();

//   return {
//     props: {
//       hotel: data.hotel,
//     },
//   };
// }

// export default SingleHotel;


'use client';
import Image from "next/image";
import Head from "next/head";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleHotel = ({ hotel }) => {
  const [auth, setAuth] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const user = Cookies.get('user');
    setAuth(user);
    setIsAuthChecked(true);
  }, []);

  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <div className="w-7/12 mx-auto my-10">
        <Image
          src={hotel?.banner}
          alt="hotels"
          width={2000}
          height={2000}
          className="w-full h-large-box my-5"
        />
        <div>
          <h3 className="text-3xl font-bold">{hotel?.name}</h3>
          <p className="text-xl my-5 text-justify">{hotel?.description}</p>
          <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
            Price: &#8377;{hotel?.price}
          </button>
          <p className="text-3xl font-bold my-5">Facilities:</p>
          <ul className="flex text-xl justify-between">
            {hotel?.facilities?.map((ele) => (
              <li key={ele.name} className="mr-10 mb-3 flex items-center">
                <span>
                  <Image
                    src={ele.img}
                    width={200}
                    height={200}
                    className="w-8 h-8 rounded-full"
                  />
                </span>
                <span className="ml-5">{ele.name}</span>
              </li>
            ))}
          </ul>
          {isAuthChecked ? (
            auth ? (
             <Link href={`/payment/${hotel?._id}`}>
               <button className="w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
                Book Now
              </button>
             </Link>
            ) : (
              <span className="text-2xl">
                Please{" "}
                <Link href={"/login"} className="text-blue-500">
                  Log In
                </Link>{" "}
                to get new Offers!
              </span>
            )
          ) : (
            <div>Loading...</div> // You can show a loading indicator or skeleton here
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  console.log(ctx.query.id);

  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();

  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;





// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';
// import DOMPurify from 'dompurify';

// const Header3 = () => {
//   const [city, setCity] = useState('');

//   // Sanitize user input
//   const handleCityChange = (e) => {
//     const sanitizedInput = DOMPurify.sanitize(e.target.value);
//     setCity(sanitizedInput);
//   };

//   return (
//     <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
//       <div className="p-5">
//         <h2 className="text-4xl text-white text-center font-bold">
//           Over 157,000 hotels and homes across 35 countries
//         </h2>
//         <div className="flex justify-center my-5 mx-20">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-6/12 h-16 outline-none px-3 text-lg border-r-2 border-gray-400"
//             onChange={handleCityChange}
//           />
//           <Link href={`/hotels?city=${city}`}>
//             <button
//               type="submit"
//               className="h-16 px-3 py-2 w-72 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
//             >
//               Search
//             </button>
//           </Link>
//         </div>
//         <div className="flex mx-20 my-5 font-bold">
//           <button
//             type="button"
//             className="h-16 px-3 py-2 hover:cursor-pointer text-white mr-5"
//           >
//             Continue your Search
//           </button>
//           <button
//             type="button"
//             className="h-16 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-2xl"
//           >
//             Homestay in Indian Hotels
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header3;
