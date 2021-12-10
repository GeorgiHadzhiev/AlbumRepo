const express = require('express');
const {PORT} = require('./constants.js');
const configExpress = require('./config/express.js');
const initDatabase = require('./config/dataBase.js');
const routes = require('./routes.js');
const cors = require('cors');


const app = express();
app.use(cors())
configExpress(app);
app.use(routes);


initDatabase()
.then(() =>{

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));

})
.catch(err =>{

    console.log('App failed: ', err);

})