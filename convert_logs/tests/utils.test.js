const {formatDateToPtBr , writeToFile} = require('../utils')

test("Test date", async () => {
    expect(await formatDateToPtBr(new Date('2021-01-01'))).toBe("31/12/2020 21:00:00");
})