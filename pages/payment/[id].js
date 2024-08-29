// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";
// import Script from "next/script";

// // Ensure the environment variable is correctly set
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const Payment = () => {
//   const router = useRouter();
  
//   const makePayment = async () => {
//     const val = {
//       id: router.query?.id,
//       email: "bhaskaryvora@gmail.com"  // Add the email address here for the payment intent
//     };

//     try {
//       const { data } = await axios.post(`/api/stripe`, val);
//       const stripe = await stripePromise;
//       const { error } = await stripe.redirectToCheckout({
//         sessionId: data.id,
//       });

//       if (error) {
//         console.error("Stripe Checkout error:", error);
//       }
//     } catch (err) {
//       console.error("API error:", err);  // Log API error for debugging
//     }
//   };

//   useEffect(() => {
//     if (router.query?.id) {
//       makePayment();
//     }
//   }, [router.query?.id]);

//   return (
//     <>
//       <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
//       <div>Loading...</div>
//     </>
//   );
// };

// export default Payment;

// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";
// import Script from "next/script";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const Payment = () => {
//   const router = useRouter();
  
//   const makePayment = async () => {
//     const val = {
//       id: router.query?.id,
//       email: "bhaskaryvora@gmail.com"  // Ensure this email is dynamically obtained in a real application
//     };

//     try {
//       const { data } = await axios.post(`/api/stripe`, val);
//       const stripe = await stripePromise;
//       const { error } = await stripe.redirectToCheckout({
//         sessionId: data.id,
//       });

//       if (error) {
//         console.error("Stripe Checkout error:", error.message);
//       }
//     } catch (err) {
//       console.error("API error:", err.message);  // Log API error for debugging
//     }
//   };

//   useEffect(() => {
//     if (router.query?.id) {
//       makePayment();
//     }
//   }, [router.query?.id]);

//   return (
//     <>
//       <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
//       <div>Loading...</div>
//     </>
//   );
// };

// export default Payment;


// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";
// import Script from "next/script";

// // Ensure the environment variable is correctly set
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const Payment = () => {
//   const router = useRouter();

//   const makePayment = async () => {
//     const val = {
//       id: router.query?.id,
//       email: "bhaskaryvora@gmail.com",  // Add the email address here for the payment intent
//     };

//     try {
//       const { data } = await axios.post(`/api/stripe`, val);
//       const stripe = await stripePromise;
//       const { error } = await stripe.redirectToCheckout({
//         sessionId: data.id,
//       });

//       if (error) {
//         console.error("Stripe Checkout error:", error.message);
//       }
//     } catch (err) {
//       console.error("API error:", err.message);  // Log API error for debugging
//     }
//   };

//   useEffect(() => {
//     if (router.query?.id) {
//       makePayment();
//     }
//   }, [router.query?.id]);

//   return (
//     <>
//       <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
//       <div>Loading...</div>
//     </>
//   );
// };

// export default Payment;


import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Script from "next/script";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const router = useRouter();

  const makePayment = async () => {
    const val = {
      id: router.query?.id,
      email: "bhaskaryvora@gmail.com"
    };

    try {
      const { data } = await axios.post(`/api/stripe`, val);
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      if (error) {
        console.error("Stripe Checkout error:", error.message);
      }
    } catch (err) {
      console.error("API error:", err.message);
    }
  };

  useEffect(() => {
    if (router.query?.id) {
      makePayment();
    }
  }, [router.query?.id]);

  return (
    <>
      <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" onLoad={() => console.log("Stripe.js loaded")} onError={(e) => console.error("Failed to load Stripe.js", e)} />
      <div>Loading...</div>
    </>
  );
};

export default Payment;
