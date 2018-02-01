// loading webserver modules
import express from 'express';
import { resolve } from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// import routes from './routes';

require('dotenv').config();

// instances of express server
const app = express();

// // configures webserver
// app.use(favicon('public/img/favicon.ico'));
// options available for logger: common, dev, short, tiny
app.use(logger('dev'));
// parse incoming data; uses middleware - software that transforms data before it reaches your code;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// server anything in the public folder
app.use(express.static(resolve(__dirname, 'public')));

// route files
// routes(app); // would make error handling (below) useless

const server = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://${server.address().address}:${server.address().port}`);
});
