export class ExchangeData {


    displayed : boolean = true;
    name : string;
    price : number;
    flag : number;
    lastUpdate : number;
    lastVolume : number;
    lastVolumeTo : number;
    lastTradeID: number;
    volume24h : number;
    volume24hTo: number;
    maskInt : number;

    delta : number;
    timestamp: number = 0;


 

    constructor()
    {}

    get _name() : string
    {
        return this.name;
    }

  
    

}
