// components/Form.jsx
import { useEffect, useState } from 'react';

export default function Form() {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      const res = await fetch('/api/csrf-token');
      const data = await res.json();
      setCsrfToken(data.csrfToken);
    }

    fetchCsrfToken();
  }, []);

  return (
    <form method="POST" action="/api/submit-form">
      <input type="hidden" name="csrfToken" value={csrfToken} />
      {/* other form fields */}
      <button type="submit">Submit</button>
    </form>
  );
}
