const fs = require('fs')

async function formatDateToPtBr(date){
    
    day  = date.getDate().toString().padStart(2, '0'),
    month  = (date.getMonth()+1).toString().padStart(2, '0'), 
    year = date.getFullYear().toString().padStart(2, '0');
    hours = (date.getHours()).toString().padStart(2,'0')
    minutes = (date.getMinutes()).toString().padStart(2,'0')
    seconds = (date.getSeconds()).toString().padStart(2, '0')
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    
}

async function writeToFile(data, filename){
    await fs.writeFile(`./${filename}`, data, err => {
        if (err) {
            console.error("Erro ao salvar arquivo. Verifique se a pasta requer permissões de administrador!")
        }
        console.log("Arquivo salvo!")
        
    })
    return 1
}

module.exports = {
    formatDateToPtBr,
    writeToFile
}