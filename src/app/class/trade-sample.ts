export class TradeSample {
    subscriptionId: number;
    exchangeName: string;
    flag : number; // 1Buy 2Sell 4unknown
    tradeId : number;
    timestamp : number;
    quantity: number;
    price: number;
    total: number;

    constructor(subscriptionId, exchangeName, flag, tradeId, timestamp, quantity, price, total)
    {
        this.subscriptionId = subscriptionId;
        this.exchangeName = exchangeName;
        this.flag = flag;
        this.tradeId = tradeId;
        this.timestamp = timestamp;
        this.quantity = quantity;
        this.price = price;
        this.total = total;
    }
    
    get _subscriptionId(): number{
        return this.subscriptionId;
    }
    set _subscriptionId(actsubscriptionId: number){
        this.subscriptionId = actsubscriptionId;
    }

    get _exchangeName(): string{
        return this.exchangeName;
    }
    set _exchangeName(actexchangeName: string){
        this.exchangeName = actexchangeName;
    }

    get _flat(): number{
        return this.flag;
    }
    set _flag(actflag: number){
        this.flag = actflag;
    }

    get _tradeId(): number{
        return this.tradeId;
    }
    set _tradeId(acttradeId: number){
        this.tradeId = acttradeId;
    }

    get _timestamp(): number{
        return this.timestamp;
    }
    set _timestamp(acttimestamp: number){
        this.timestamp = acttimestamp;
    }

    get _quantity(): number{
        return this.quantity;
    }
    set _quantity(actquantity: number){
        this.quantity = actquantity;
    }

    get _price(): number{
        return this.price;
    }
    set _price(actprice: number){
        this.price = actprice;
    }

    get _total(): number{
        return this.total;
    }
    set _total(acttotal: number){
        this.total = acttotal;
    }
}
