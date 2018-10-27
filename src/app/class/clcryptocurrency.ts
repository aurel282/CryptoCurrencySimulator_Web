export class Clcryptocurrency {
  _id: number;
  _name: string;
  _symbol: string;

  _coinName: string;
  _fullName: string;
  _isTrading: boolean;
  _algorithm: string;
  _prooftype: string;
  _fullypremined: boolean;
  _totalCoinsupply: number;
  _sortOrder: number;
  
  _picture: URL;
  _color: string;
  _primary: boolean;
  
 static PreUrl: string;



  constructor(id, name, symbol, urlpic, coinName, fullName, isTrading, algorithm, prooftype, fullypremined, totalCoinsupply, sortOrder)
  {
    this._id = id;
    this._name = name;
    this._symbol = symbol;
    this._picture = urlpic;
    this._coinName = coinName;
    this._fullName = fullName;
    this._isTrading = isTrading;
    this._algorithm = algorithm;
    this._prooftype = prooftype;
    this._fullypremined = fullypremined;
    this._totalCoinsupply = totalCoinsupply;
    this._sortOrder = sortOrder;
  }

  get name(): string{
    return this._name;
  }
  set name(actName: string){
    this._name = actName;
  }
  get id(): number{
    return this._id;
  }
  set id(actId: number){
    this._id = actId;
  }
  get symbol(): string{
    return this._symbol;
  }
  set symbol(actSymbol: string){
    this._symbol = actSymbol;
  }

  
  get coinName(): string{
    return this._coinName;
  }
  set coinName(actcoinName: string){
    this._coinName = actcoinName;
  }
  get fullName(): string{
    return this._fullName;
  }
  set fullName(actfullName: string){
    this._fullName = actfullName;
  }
  get isTrading(): boolean{
    return this._isTrading;
  }
  set isTrading(ActisTrading: boolean){
    this._isTrading = ActisTrading;
  }
  get totalCoinsupply(): number{
    return this._totalCoinsupply;
  }
  set totalCoinsupply(acttotalCoinsupply: number){
    this._totalCoinsupply = acttotalCoinsupply;
  }
  get sortOrder(): number{
    return this._sortOrder;
  }
  set sortOrder(actsortOrder: number){
    this._sortOrder = actsortOrder;
  }
  get algorithm(): string{
    return this._algorithm;
  }
  set algorithm(actalgorithm: string){
    this._algorithm = actalgorithm;
  }
  get prooftype(): string{
    return this._prooftype;
  }
  set prooftype(actprooftype: string){
    this._prooftype = actprooftype;
  }
  get fullypremined(): boolean{
    return this._fullypremined; 
  }
  set fullypremined(actfullypremined: boolean){
    this._fullypremined = actfullypremined;
  }


  get color(): string{
    return this._color;
  }
  set color(actColor: string){
    this._color = actColor;
  }
  get picture(): URL{
    return this._picture;
  }
  set picture(actPic: URL){
    this._picture = actPic;
  }
  
}
