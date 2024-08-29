// import withSession from '../../lib/session';

// export default withSession(async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { csrfToken } = req.body;
//     const sessionCsrfToken = req.session.csrfToken;

//     if (!csrfToken || csrfToken !== sessionCsrfToken) {
//       return res.status(403).json({ error: 'Invalid CSRF token' });
//     }

//     // Process the form data
//     // ...

//     res.status(200).json({ message: 'Form submitted successfully' });
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// });


// import withSession from '../../lib/session';
// import { setCsrfToken } from '../../middleware/csrf';

// export default withSession(async function handler(req, res) {
//   if (req.method === 'POST') {
//     setCsrfToken(req, res, () => {});
//     const { csrfToken } = req.body;
//     const sessionCsrfToken = req.session.csrfToken;

//     if (!csrfToken || csrfToken !== sessionCsrfToken) {
//       return res.status(403).json({ error: 'Invalid CSRF token' });
//     }

//     // Process the form data
//     // ...

//     res.status(200).json({ message: 'Form submitted successfully' });
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// });


// import withSession from '../../lib/session';
// import { validateCsrfToken } from '../../middleware/csrf';

// export default withSession(async function handler(req, res) {
//   if (req.method === 'POST') {
//     const csrfToken = req.body.csrfToken;
//     if (!validateCsrfToken(req)) {
//       return res.status(403).json({ error: 'Invalid CSRF token' });
//     }

//     // Process the form data
//     // ...

//     res.status(200).json({ message: 'Form submitted successfully' });
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// });

import withSession from '../../lib/session';
import { setCsrfToken } from '../../middleware/csrf';

export default withSession(async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      setCsrfToken(req, res, () => {});
      const { csrfToken } = req.body;
      const sessionCsrfToken = req.session.csrfToken;

      if (!csrfToken || csrfToken !== sessionCsrfToken) {
        return res.status(403).json({ error: 'Invalid CSRF token' });
      }

      // Process the form data
      // ...

      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in submit-form handler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
