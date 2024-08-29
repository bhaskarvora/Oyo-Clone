import { generateCsrfToken } from "@/utils/csrf";
import { serialize } from 'cookie';

export default function handler(req, res) {
  if (req.method === "GET") {
    const csrfToken = generateCsrfToken();
    res.setHeader('Set-Cookie', serialize('csrfToken', csrfToken, {
      // Removed options: httpOnly, secure, sameSite
      path: '/' // Only 'path' is kept
    }));

    return res.status(200).json({ csrfToken });
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ msg: `Method ${req.method} Not Allowed` });
  }
}


// // pages/api/csrf-token.js
// import { generateCsrfToken } from '../../middleware/csrf';

// export default function handler(req, res) {
//   const csrfToken = generateCsrfToken();
//   res.status(200).json({ csrfToken });
// }



// import { csrfToken } from '../../middleware/csrf';

// export default function handler(req, res) {
//   const token = csrfToken(req);
//   res.status(200).json({ csrfToken: token });
// }
