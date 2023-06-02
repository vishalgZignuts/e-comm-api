const express =  require('express');
const  dbConnect  = require('./config/dbConnect');

const app = express();

const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const productRoute = require('./routes/productRoute');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');


dbConnect();
app.use(morgan('dev'))
// var logger = morgan('combined')
app.use(express.json());
app.use(bodyParser .urlencoded({extended: false}) );
app.use(cookieParser())
app.use(cors())


app.use('/api/user', authRouter);
app.use('/api/product', productRoute);


app.use(notFound)
app.use(errorHandler)





app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
}) 