import http from "http"




const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("we are away")
        res.end()
        
    } else if (req.url == "/away") {
        res.write("we are away")
        res.end() 
    }
    else {
        res.write("we are no where")
        res.end()
    }

})
 






server.listen(3000, () => {

    console.log("listening on 3000");
    
})
