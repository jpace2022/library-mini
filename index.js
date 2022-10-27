//Add server code here!
const express = require("express")
const app = express();
const path = require("path")
const fs = require("fs")
const PORT = 3000;

app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"))
})

app.get('/api/books',(req, res) => {
    fs.readFile("./db/books.json", "utf-8", (err,data)=>{
        if(err) {
            console.log(err)
            res.status(500).json({
                msg:"oh no!",
                err:err
            })
        } else {
            const dataArr = JSON.parse(data)
            return res.json(dataArr)
        }
    })

})

app.get('/api/books/:id',(req, res) => {
    fs.readFile("./db/books.json", "utf-8", (err,data)=>{
        if(err) {
            console.log(err)
            res.status(500).json({
                msg:"oh no!",
                err:err
            })
        } else {
            const dataArr = JSON.parse(data)
            console.log(req.params.id)
            for (let i = 0; i < dataArr.length; i++) {
                const book = dataArr[i];
                if (book.id==req.params.id) {
                    return res.json(book)
                }
            }
            res.status(404).json({
                msg:"book not found!"
            })
        }
    })
})
app.post('/api/books/',(req, res) => {
    fs.readFile("./db/books.json", "utf-8", (err,data)=>{
        if(err) {
            console.log(err)
            res.status(500).json({
                msg:"oh no!",
                err:err
            })
        } else {
            const dataArr = JSON.parse(data)
            dataArr.push(req.body);
            fs.writeFile("./db/books.json", JSON.stringify(dataArr),(err,data)=> {
                if(err) {
                    console.log(err)
                    res.status(500).json({
                        msg:"oh no!",
                        err:err
                    })  
                }
                else {
                    res.json({
                        msg:"succefully added!"
                    })
                }
            })
            
        }
    })
})

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname,"./views/404.html"))
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})