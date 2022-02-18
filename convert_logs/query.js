const axios = require('axios')

async function getLogs(url){
    try {
        const result = await axios(url, {
          method: 'get',
        });
        console.log(result.data)
        return result.data;
      } catch (e) {
        throw (Error("Erro when trying to get logs. Verify its the correct URL!"));
      }
}

module.exports ={
    getLogs
}