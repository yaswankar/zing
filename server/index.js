const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT, mongoURL} = require('./config');
const mongoose = require('mongoose');
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('Mongodb database is connected....'))
.catch(err => console.log(err));

const user = require('./routes/api/user');
const channel = require('./routes/api/channel');

app.use('/api/user', user);
app.use('/api/channel', channel);


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));