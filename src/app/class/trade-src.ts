export class TradeSrc {
    flag: number; // 0 Trade - 2 Current - 5 CurrentAgg
    name: string;
    fsym: string;
    tsym: string;
    constructor(flag, name, fsym, tsym)
    {
        this.flag = flag;
        this.name = name;
        this.fsym = fsym;
        this.tsym = tsym;
    }

    get _name(): string{
        return this.name;
    }
    set _name(actName: string){
        this.name = actName;
    }

    get _fsym(): string{
        return this.fsym;
    }
    set _fsym(actfsym: string){
        this.fsym = actfsym;
    }

    get _tsym(): string{
        return this.tsym;
    }
    set _tsym(acttsym: string){
        this.tsym = acttsym;
    }
    get _flat(): number{
        return this.flag;
    }
    set _flag(actflag: number){
        this.flag = actflag;
    }

    
}
