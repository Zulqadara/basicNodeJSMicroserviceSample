const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json())

var items = []

//routes 

app.get('/', (req, res)=>{
    return res.json({
        "message": "This is home"
    })
})

app.get('/test', (req, res)=>{
    return res.json({
        "message": "This is test"
    })
})

app.get('/viewItems', (req, res)=>{
    return res.json({
        "items": items
    })
})

app.post('/addItem', (req,res)=>{    
    console.log(req.body);
    items.push(req.body.name)
    return res.json({
        "items": items
    })
})

app.listen(2000, ()=>{
    console.log(`Server is running on port 2000`)
})