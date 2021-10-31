const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
app.use(express.static('public'));
app.get('/',(req,res)=>{
    try{
        res.sendFile(__dirname+'/index.html');
    }
    catch(e){
        res.send({"status": false,"msg":"error occurred"};
    }
})

app.listen(port, () => {
  console.log("Server is listening on ");
});
