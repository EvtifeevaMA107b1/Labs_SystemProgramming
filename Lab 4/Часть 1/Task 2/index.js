const { promises } = require("fs");
const http = require("http");

http.createServer(async (req, res) =>
{
    if(req.method=='GET')
    {
        const data = await promises.readFile("./input.txt", "utf8");
        res.write(data);
        console.log("GET: "+ data)
        res.end();
    }
    else if(req.method=="POST")
    {
        const buffers = [];
        for await (const chunk of req)
        {
          buffers.push(chunk);
        }
        const data = Buffer.concat(buffers).toString();
        await promises.appendFile("./input.txt", "\n"+data);
        console.log("POST: "+ data);
      }
      res.end(); 
    }).listen(3000, function(){ console.log("Сервер запущен по адресу http://localhost:3000")});
