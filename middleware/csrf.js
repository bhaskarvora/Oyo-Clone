// middleware/csrf.js
// import crypto from 'crypto';

// export function generateCsrfToken() {
//   return crypto.randomBytes(32).toString('hex');
// }

// export function setCsrfToken(req, res, next) {
//   if (!req.session.csrfToken) {
//     req.session.csrfToken = generateCsrfToken();
//   }
//   next();
// }


// import crypto from 'crypto';

// const generateToken = (secret) => {
//   return crypto.createHmac('sha256', secret).update(crypto.randomBytes(32)).digest('hex');
// };

// export const csrfToken = (req) => {
//   const token = generateToken(process.env.CSRF_SECRET);
//   req.session.csrfToken = token;
//   return token;
// };

// export const validateCsrfToken = (req) => {
//   const token = req.headers['x-csrf-token'] || req.body._csrf;
//   return token && token === req.session.csrfToken;
// };

// import crypto from 'crypto';

// const generateToken = (secret) => {
//   return crypto.createHmac('sha256', secret).update(crypto.randomBytes(32)).digest('hex');
// };

// export const csrfToken = (req) => {
//   const token = generateToken(process.env.CSRF_SECRET);
//   req.session.csrfToken = token;
//   return token;
// };

// export const validateCsrfToken = (req) => {
//   const token = req.headers['x-csrf-token'] || req.body.csrfToken;
//   return token && token === req.session.csrfToken;
// };



import crypto from 'crypto';

// Generate a CSRF token
const generateToken = (secret) => {
  if (!secret) {
    throw new Error('CSRF_SECRET is not defined');
  }
  return crypto.createHmac('sha256', secret).update(crypto.randomBytes(32)).digest('hex');
};

// Create and store a CSRF token in the session
export const csrfToken = (req) => {
  if (!req.session) {
    throw new Error('Session is not initialized');
  }
  const token = generateToken(process.env.CSRF_SECRET);
  req.session.csrfToken = token;
  return token;
};

// Validate the CSRF token from the request
export const validateCsrfToken = (req) => {
  if (!req.session) {
    throw new Error('Session is not initialized');
  }
  const token = req.headers['x-csrf-token'] || req.body.csrfToken;
  return token && token === req.session.csrfToken;
};
