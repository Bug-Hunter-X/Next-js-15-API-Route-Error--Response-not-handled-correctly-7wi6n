```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This will cause an error because the response object is not handled correctly
  res.status(200).json({ name: 'John Doe' });
}
```