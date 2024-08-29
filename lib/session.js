import { withIronSession } from 'next-iron-session';

export default function withSession(handler) {
  return withIronSession(handler, {
    password: process.env.SESSION_SECRET,
    cookieName: 'myapp_session',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });
}


// console.log('SESSION_SECRET:', process.env.SESSION_SECRET); // Debugging line

// import { withIronSession } from 'next-iron-session';

// export default function withSession(handler) {
//   return withIronSession(handler, {
//     password: process.env.SESSION_SECRET,
//     cookieName: 'myapp_session',
//     cookieOptions: {
//       secure: process.env.NODE_ENV === 'production',
//     },
//   });
// }


// import { withIronSession } from 'next-iron-session';

// const sessionOptions = {
//   password: process.env.SESSION_SECRET || 'default_secret', // Hardcoded for debugging
//   cookieName: 'myapp_session',
//   cookieOptions: {
//     secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
//   },
// };

// export default function withSession(handler) {
//   return withIronSession(handler, sessionOptions);
// }
