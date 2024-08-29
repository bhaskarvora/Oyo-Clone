import crypto from 'crypto';

export function generateCsrfToken() {
  return crypto.randomBytes(64).toString('hex');
}

export function validateCsrfToken(req) {
  const csrfToken = req.headers['x-csrf-token'];
  const cookieToken = req.cookies.csrfToken;
  return csrfToken === cookieToken;
}
