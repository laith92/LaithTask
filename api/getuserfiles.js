const express = require('express');
const router = express.Router();



router.post('/', (req, res, next) => {

    const data = req.body;

    var result = [{"":[]}];
      
    data.forEach(obj => {
        console.log(Object.keys(obj)[0]);
        console.log(Object.keys(obj));
        key = Object.keys(obj)[0];
        value = data[key];
        if(result.filter(t => Object.keys(t).includes(key)).length){
            
            result[key].push(value);
        }
        else{
            result.push({key:[value]});
        }
    })

     
    res.status(200);
    res.send(result);

});

module.exports = router;