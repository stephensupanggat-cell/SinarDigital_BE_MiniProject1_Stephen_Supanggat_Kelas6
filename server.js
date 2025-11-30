require('dotenv').config();
const app = require('./src/app');
const config = require('./src/config/app.config');


const port = process.env.PORT || config.port || 3000;


app.listen(port, () => {
console.log(`Server started at http://localhost:${port}`);
});