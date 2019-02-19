const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./util/database');
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', 'views');




const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



const errorController = require('./controller/error404');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(errorController.GetError404);

app.listen(port);