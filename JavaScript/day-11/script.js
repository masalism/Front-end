var figura = {
    aukstis: 8,
    plotis: 7,
    ilgis: 6,
    turis: function () {
        return this.aukstis * this.plotis * this.ilgis;
    }
}

var figura1 = {
    aukstis: 2,
    plotis: 4,
    ilgis: 6,
    turis: function () {
        return this.aukstis * this.plotis * this.ilgis;
    }
}

console.log(figura.turis());
console.log(figura1.turis());
// var turis = figura.aukstis * figura.plotis * figura.ilgis;
var d = new Date();
var audi = {
    marke: 'audi',
    modelis: 'A6',
    metai: 2001,
    numeris: 'HON950',
    spalva: 'Raudona',
    transmisija: 'Automatine',
    kebulas: 'Sedanas',
    amzius: function () {
        return d.getFullYear() - this.metai;
    }
}

// objekto sablonas
function Automobilis(marke, modelis, metai, numeris, spalva, transmisija, kebulas) {
    this.marke = marke
    this.modelis = modelis
    this.metai = metai;
    this.numeris = numeris;
    this.spalva = spalva;
    this.transmisija = transmisija;
    this.kebulas = kebulas;
    this.amzius = function () {
        return d.getFullYear() - this.metai;
    }
}

var bmw = new Automobilis('BMW', '320', 2007, 'LID486', 'Pilka', 'Automatine', 'Universalas');
var toyota = new Automobilis('TOYOTA', 'Audris', 2004, 'EZO654', 'Zydra', 'Automatine', 'Hecbekas');
console.log(bmw)
console.log(toyota)
console.log(bmw.amzius())
console.log(Automobilis)

// console.log(automobilis.amzius())