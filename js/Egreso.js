class Egreso extends Dato{
    static a = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._idEgreso = ++Egreso.a;
    }
    get idEgreso(){
        return this._idEgreso
    }
}