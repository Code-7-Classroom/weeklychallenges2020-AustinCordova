const express = require('express')
const app = express();
let data = require('../Hard/package.json');

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
app.get("/employees/:id", function (req, res) {
    const sData = data.employees.find(e => e.id === parseInt(req.params.id));
    if (!sData) {
      res.status(404).send(`Could not find the employees ID.`);
    }
        res.status(202).send(sData);
  });
app.delete('/employees/:id', function(req,res){
    const sData = data.employees.find(function (student) {
        return parseInt(req.params.id) === student.id;
      });
      if (!sData) {
        res.status(404).send(`Could not find the student ID.`);
      }
      const index = data.employees.indexOf(sData)
      data.employees.splice(index,1)
      res.send(sData)

})
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});