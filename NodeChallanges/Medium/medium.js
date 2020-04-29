let express = require('express');
let app = express();
let data = require('./public/package.json');

app.get('/test', (req, res) => {

    res.send('Hello World')
});
app.get('/employees', (req, res) => {
    if(!data){
        res.status(404).send(`Couldn't find the specified employee`)
    }
    res.send(data)
});

app.get('/employees/:id', (req, res) => {
    const sData = data.students.find( (student) => {
        console.log(student.id)
        return parseInt(req.params.id) === student.id
    });
    if(!sData){
        res.status(404).send(`Couldn't find the spicified employee`)
    }

    res.send(sData)
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});