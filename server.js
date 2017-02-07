import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = module.exports = express();

app.use(bodyParser.json());

app.use(cors());

app.use(require('prerender-node'));

app.use(express.static(__dirname + '/public'));

app.listen(2121, function() {
    console.log('Hosting port', 2121);
});
