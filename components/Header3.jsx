"use client";

import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState(" ");

  return (
    <div className=" bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className=" p-5">
        <h2 className=" text-4xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="flex justify-center my-5 mx-20 ">
          <input
            type="text"
            placeholder="Search..."
            className=" w-6/12  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 "
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          {/* <input
            type="date"
            placeholder="Search..."
            className="  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="date"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg col-span-1"
          /> */}

          <button
            type="submit"
            className=" h-16 px-3 py-2 w-72 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
          >
            <Link href={`/hotels?city=${city}`}>Search</Link>
          </button>
        </div>
        <div className="flex mx-20 my-5 font-bold">
          <button
            type="submit"
            className=" h-16 px-3 py-2 hover:cursor-pointer text-white mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className=" h-16 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-xl"
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;

// 'use client'
// import Link from "next/link";
// import { useState } from "react";


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

// 'use client'
// import Link from "next/link";
// import { useState } from "react";
// import DOMPurify from 'dompurify'; // Ensure DOMPurify is correctly imported

// const Header3 = () => {
//   const [city, setCity] = useState('');

//   // Function to sanitize the user input
//   const sanitizeInput = (input) => {
//     return DOMPurify.sanitize(input);
//   };

//   const sanitizedCity = sanitizeInput(city);

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
//             onChange={(e) => setCity(e.target.value)}
//             value={city}
//           />
//           <Link href={`/hotels?city=${sanitizedCity}`}>
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


// 'use client'
// import Link from "next/link";
// import { useState } from "react";
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


// import DOMPurify from 'dompurify';
// import { useState } from 'react';
// import Link from 'next/link';

// const Header3 = () => {
//   const [city, setCity] = useState('');

//   // Sanitize and encode user input
//   const handleCityChange = (e) => {
//     const sanitizedInput = DOMPurify.sanitize(e.target.value);
//     setCity(sanitizedInput);
//   };

//   // Encode city input for URL
//   const encodedCity = encodeURIComponent(city);

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
//           <Link href={`/hotels?city=${encodedCity}`}>
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

// 'use client'
// import Link from "next/link";
// import { useState } from "react";
// import DOMPurify from 'dompurify';

// const Header3 = () => {
//   const [city, setCity] = useState('');

//   // Sanitize and encode user input
//   const handleCityChange = (e) => {
//     const sanitizedInput = DOMPurify.sanitize(e.target.value);
//     setCity(sanitizedInput);
//     console.log("Sanitized City Value:", sanitizedInput); // Log sanitized input
//   };

//   // Encode city input for URL
//   const encodedCity = encodeURIComponent(city);
//   console.log("Encoded City Value:", encodedCity); // Log encoded city value

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
//           <Link href={`/hotels?city=${encodedCity}`}>
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


// 'use client'
// import Link from "next/link";
// import { useState } from "react";
// import DOMPurify from 'dompurify';

// const Header3 = () => {
//   const [city, setCity] = useState('');

//   // Sanitize user input
//   const handleCityChange = (e) => {
//     const rawInput = e.target.value;
//     const sanitizedInput = DOMPurify.sanitize(rawInput);
//     setCity(sanitizedInput);

//     console.log("Raw City Value:", rawInput); // Log raw input
//     console.log("Sanitized City Value:", sanitizedInput); // Log sanitized input
//   };  

//   // Encode city input for URL
//   const encodedCity = encodeURIComponent(city);
//   console.log("Encoded City Value:", encodedCity); // Log encoded city value

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
//           <Link href={`/hotels?city=${encodedCity}`}>
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
