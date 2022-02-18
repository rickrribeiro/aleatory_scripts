const packagej = require('./package.json');
const {formatDateToPtBr} = require('./utils.js')

async function converter(logs){
    try{

        const lines = logs.split('\n')
        let convertedLogs = `#Version: ${packagej.version}\n#Date: ${await formatDateToPtBr(new Date)}\n#Fields: provider http-method status-code uri-path time-taken response-size cache-status\n`
        lines.forEach((line)=>{
            if(line.length > 0){
                const method = line.split('"')[1].split(' ')[0]
                const statusCode = line.split('|')[1]
                const uriPath = line.split('/')[1].split(' ')[0]
                const timeTaken = line.split('|')[4].split('.')[0]
                const responseSize = line.split('|')[0]
                const cacheStatus = line.split('|')[2]
                convertedLogs+=`"MINHA CDN" ${method} ${statusCode} ${uriPath} ${timeTaken} ${responseSize} ${cacheStatus}\n`
            }
        })
        return convertedLogs
    }catch(err){
        console.log(err)
        throw Error("Os logs estão em um formato desconhecido!")
    }
}

module.exports = {
    converter
}