import Hotel from "@/components/Hotel"
import Header1 from "@/components/Header1"
import Filters from "@/components/Filters";
import { useEffect, useState } from "react";
import axios from "axios";

const Hotels = ({hotels}) => {

  const[price, setPrice] = useState(3500);
  const [list, setList] = useState([]);

  const[checkedList, setCheckedList] = useState([]);


  const handleCheckList = async() =>{


    const {data} = await axios.get(`/api/facilities/search?val=${checkedList}`);
    if(data?.hotels)
      {
        setList(data.hotels);
      }
  };


  useEffect(()=>{
    if(checkedList)
      {
        handleCheckList();
      }
  },[checkedList])

  

  const handlePrice = async() =>
    {

      const {data} = await axios.get(`/api/facilities/range?price=${price}`)

      if(data?.hotels)
        {
          setList(data.hotels);
        } 

    };
  return (
    <>
   
    <Header1/>


    
    <div className="grid grid-cols-12">


      <div className="col-span-3">
        <Filters price = {price} setPrice = {setPrice} handlePrice = {handlePrice} checkedList={checkedList} setCheckedList={setCheckedList} />

     
      </div>

      <div className="col-span-9">


    {
     list.length > 0 ? list.map((e) =>{
      return ( <div className=" m-5 " key={e._id}>
        <Hotel  e={e}/>
    </div>);
     }) :  hotels? hotels.map((e)=>
      {
        return (
        <div className=" m-5 " key={e._id}>
          <Hotel  e={e}/>
      </div>
        );
      }) : ''
    }
    </div>

</div>
    
       
      
     
    
    </>
  )
};


// Here by using the getServerSideProps we will get the data on the server side so if we do console.log we will not get the output in the browser
//side instead we can see in the terminal output 

export async function getServerSideProps(ctx)
{
  const res = await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city  }`) 

  const data = await res.json();


  return{
    props:{
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}



export default Hotels;






// import Hotel from "@/components/Hotel";
// import Header1 from "@/components/Header1";
// import Filters from "@/components/Filters";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Hotels = ({ hotels }) => {
//   const [price, setPrice] = useState(3500);
//   const [list, setList] = useState([]);
//   const [checkedList, setCheckedList] = useState([]);

//   const handleCheckList = async () => {
//     try {
//       const { data } = await axios.get(`/api/facilities/search?val=${checkedList}`);
//       if (data?.hotels) {
//         setList(data.hotels);
//       }
//     } catch (error) {
//       console.error("Error fetching hotels by facilities:", error);
//     }
//   };

//   const handlePrice = async () => {
//     try {
//       const { data } = await axios.get(`/api/facilities/range?price=${price}`);
//       if (data?.hotels) {
//         setList(data.hotels);
//       }
//     } catch (error) {
//       console.error("Error fetching hotels by price range:", error);
//     }
//   };

//   useEffect(() => {
//     if (checkedList.length > 0) {
//       handleCheckList();
//     }
//   }, [checkedList]);

//   return (
//     <>
//       <Header1 />
//       <div className="grid grid-cols-12">
//         <div className="col-span-3">
//           <Filters
//             price={price}
//             setPrice={setPrice}
//             handlePrice={handlePrice}
//             checkedList={checkedList}
//             setCheckedList={setCheckedList}
//           />
//         </div>
//         <div className="col-span-9">
//           {list.length > 0
//             ? list.map((e) => (
//                 <div className="m-5" key={e._id}>
//                   <Hotel e={e} />
//                 </div>
//               ))
//             : hotels
//             ? hotels.map((e) => (
//                 <div className="m-5" key={e._id}>
//                   <Hotel e={e} />
//                 </div>
//               ))
//             : null}
//         </div>
//       </div>
//     </>
//   );
// };

// export async function getServerSideProps(ctx) {
//   try {
//     const res = await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`);
//     const data = await res.json();

//     if (!data) {
//       return {
//         notFound: true,
//       };
//     }

//     return {
//       props: {
//         hotels: data.hotels ? data.hotels : data.allhotels,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching hotels server side:", error);
//     return {
//       props: {
//         hotels: [],
//       },
//     };
//   }
// }

// export default Hotels;
