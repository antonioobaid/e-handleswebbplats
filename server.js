const express = require('express');
const cors = require('cors');

const app = express();

// Tillåt alla korsdomänförfrågningar (detta bör begränsas i produktion)
app.use(cors());

// Dina övriga routar och serverkonfigurationer här

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
