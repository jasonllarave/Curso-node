const canalYT = "cursandonode";

function sumar (n1, n2) {
    return n1 + n2;
}

function restar (n1, n2){
    return n1 - n2;
}

function multiplicar (n1, n2){
    return n1 * n2;
}

//module.exports.sumar = sumar;
//module.exports.canal = canalYT;

module.exports = {
    canal : canalYT,         //exportando varios elementos a la vvez
    sumar :  sumar,
    restar : restar,
    multiplicar :  multiplicar
};





