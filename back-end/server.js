const express = require('express');
const userCollection = require("./mongo")
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.post("/", async(req, res) => {
    const {username, password} = req.body

    try {
        const check= await userCollection.findOne({username : username})

        if (check) {
            res.json("exist")
        }
        else {
            res.json("not exist")
        }

    }
    catch (err) {
res.json("not exist")    }
})

app.post("/SignUp", async(req, res) => {
    const {username, password} = req.body

    const data = {
        username: username,
        password: password
    }

    try {
        const check= await userCollection.findOne({username : username})

        if (check) {
            res.json("exist")
        }
        else {
            res.json("not exist")
            await userCollection.insertMany([data])
        }

    }
    catch (err) {
res.json("not exist")    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})