const express = require("express");

const bp = require("body-parser");

const router = express.Router();

const cors = require("cors");

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended : false}));

app.use(cors());

messages = [{
    name : "shaik"
}];

router.get("/messages",(req,res)=>{
    res.send(messages);
});

router.post("/update",(req,res)=>{
    messages.push(req.body);
    res.send(messages);
});

app.use("/",router);

app.listen(1111,()=>{
    console.log("app listening port no 1111 ")
});
