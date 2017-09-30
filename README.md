# Run

you need node.js to run this program.

```bash
npm install
npm start
```

Open [http://localhost:3001](http://localhost:3001) (Same Origin) and  [http://localhost:3000](http://localhost:3001) (Cross origin) to compare

# Access-Control-Expose-Headers

The Access-Control-Expose-Headers response header indicates which headers can be exposed as part of the response by listing their names.

By default, only the 6 simple response headers are exposed:

- Cache-Control
- Content-Language
- Content-Type
- Expires
- Last-Modified
- Pragma

If you want clients to be able to access other headers, you have to list them using the Access-Control-Expose-Headers header.
