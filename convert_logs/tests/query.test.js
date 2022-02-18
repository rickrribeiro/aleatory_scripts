const {getLogs} = require("../query")

// Não consegui identificar o motivo de não estar passando
test("get logs", async () => {
    expect(await getLogs("https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt")).toBe(`312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2
101|200|MISS|"POST /myImages HTTP/1.1"|319.4
199|404|MISS|"GET /not-found HTTP/1.1"|142.9
312|200|INVALIDATE|"GET /robots.txt HTTP/1.1"|245.1`);
})