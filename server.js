const express = require('express');
const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});