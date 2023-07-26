const express = require("express");
const qr = require("qrcode");

const app = express();
app.use(express.json());

//to File
// app.get("/api/v1/get-qrcode", async (req,res) =>{
//     let data = {name: "qrcode by Shreya"};
//     const str = JSON.stringify(data.name);
//     qr.toFile("qr.png", str, (err) => {
//         if (err) console.log("err");
//     });
//     res.send(data.name);
// });

//Data Url
app.get("/api/v1/get-qrcode", async(req,res) => {
    let data = { name: "qrcode by Shreya"};
    const str = JSON.stringify(data);
    qr.toDataURL(str, (err, data) => {
        if(err) console.log("err");
        // res.send(`<img src = ${data} />`).json({qrcode: data});
        res.send(`<img src = ${data} />`)
    });
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});