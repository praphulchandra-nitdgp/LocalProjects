const fs = require("fs");

// fs.writeFile("message.txt", "hello from ", (err) => {
//     if(err) throw err;
//     console.log("success");
// });

fs.readFile("./message.txt","utf8", (err,data) => {
    if(err) throw err;
    console.log(data);
});

