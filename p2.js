const http = require("http");

const server = http.createServer((req, resp) => {

    if (req.method == "GET") {

        resp.writeHead(200, { "content-type": "text/html" });

        resp.write('<form method="POST">');
        resp.write('RollNo <input type="text" name="rno" /><br>');
        resp.write('Name <input type="text" name="name" /><br>');
        resp.write('<button type="submit">Submit</button>');
        resp.write('</form>');

        resp.end();
    }

    else if (req.method == "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body = body + chunk;
        });

        req.on("end", () => {

            let data = new URLSearchParams(body);

            console.log(`RollNo=${data.get("rno")}`);
            console.log(`Name=${data.get("name")}`);

            resp.writeHead(200, { "content-type": "text/html" });
            resp.write("<h1>Your information received</h1>");
            resp.end();
        });
    }
});

server.listen(3000, () => {
    console.log("Server started");
});