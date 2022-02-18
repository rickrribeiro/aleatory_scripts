const {converter} = require("../converter")
const {formatDateToPtBr} = require("../utils")
// Não consegui identificar o motivo de não estar passando
test("convert logs", async () => {
    expect(await converter(`312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2
101|200|MISS|"POST /myImages HTTP/1.1"|319.4
199|404|MISS|"GET /not-found HTTP/1.1"|142.9
312|200|INVALIDATE|"GET /robots.txt HTTP/1.1"|245.1`)).toBe(`#Version: 1.0.0
#Date: ${await formatDateToPtBr(new Date())}
#Fields: provider http-method status-code uri-path time-taken response-size cache-status
"MINHA CDN" GET 200 robots.txt 100 312 HIT
"MINHA CDN" POST 200 myImages 319 101 MISS
"MINHA CDN" GET 404 not-found 142 199 MISS
"MINHA CDN" GET 200 robots.txt 245 312 INVALIDATE
`);
})