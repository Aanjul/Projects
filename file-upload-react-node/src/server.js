let express = require('express'),
mongoose = require('mongoose'),
cors = require('cors'),
bodyParser = require('body-parser'),
dbConfig = require(./shared/db);

const api = require('./service/user')

//MongoDB Configuration
mongoose.Promise =global.Promise;
mongoose.connect(dbConfig.db, {
useNewUrlParser:true
}).then(() => {
    console.log('Database Connected Successfully')
},
error => {
    console.log('Database could be connected: ' + error)
}
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(cors());

app.use('/public', express.static('public'));

app.use('/api', api)

const port  = 3001;

app.use((req,res,next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode)err.statusCode= 500;
    res.status(err.statusCode).send(err.message);
});

app.listen (port, () =>  {
    console.log('App is running on port' + port)
})