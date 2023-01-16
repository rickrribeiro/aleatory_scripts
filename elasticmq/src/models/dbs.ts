class Dbs{

    private messages: [Object?] = [];

    constructor(){}

    getMessages () {
        return this.messages;
    }

    setMessage(message: Object){
        this.messages.push(message)
    }
    
}

export{
    Dbs
}