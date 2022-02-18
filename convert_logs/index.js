const {getLogs} = require('./query.js')
const {converter} = require('./converter')
const {writeToFile} = require('./utils')


if(process.argv.length != 4){
    console.log('Wronf command format. Please run "npm run convert {logs_url} {file.txt}"');
}

async function convert(){
    try{
        const logs = await getLogs(process.argv[2])
        const convertedLogs = await converter(logs)
        await writeToFile(convertedLogs, process.argv[3])
    }catch(err){
        console.error(err.message)
    }
}

convert()

