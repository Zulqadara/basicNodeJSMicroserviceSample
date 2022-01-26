const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json())

var itemName = []
var itemBrand = []

app.get('/', (req, res)=>{
    console.log("This is Home");
})

app.get('/viewItemBrand', (req, res)=>{
    return res.json({
        "itemBrands": itemBrand
    })
})

app.post('/addItem', (req,res)=>{
    
    itemName.push(req.body.name)
    itemBrand.push(req.body.brand)

    return res.json({
        "Item Names": itemName
    })
})

app.listen(2000, ()=>{
    console.log(`Server is running on port 2000`)
})