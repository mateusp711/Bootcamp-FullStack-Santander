"use strict";
function jogaErro(erro, codigo) {
    throw { error: erro, codigo };
}
jogaErro("Uops, parce que houve um problema", 500);
