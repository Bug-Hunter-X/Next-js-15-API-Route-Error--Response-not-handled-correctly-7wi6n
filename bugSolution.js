```javascript
// pages/api/hello.js
export default async function handler(req, res) {
  try {
    // Correctly handle the response
    res.status(200).json({ name: 'John Doe' });
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
```