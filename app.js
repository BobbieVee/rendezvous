const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const path = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'node_modules')));


app.get('/', (req, res, next) => {
	res.sendFile('./index')
})
app.listen(port, ()=> console.log(`listening on port ${port}`));
