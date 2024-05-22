import React from "react";

const calculadora = (diaSemana, numGrandes, numPequenos) => {
    const precos = [];

    const PetShops = [
        {
            nome: "Meu Canino Feliz",
            distancia: 2,
            precoDS_pequenos: 20.00,
            precoDS_grandes: 40.00,
            precoFS_pequenos: 24.00,
            precoFS_grandes: 48.00
        },
        {
            nome: "Vai Rex",
            distancia: 1.7,
            precoDS_pequenos: 15.00,
            precoDS_grandes: 50.00,
            precoFS_pequenos: 20.00,
            precoFS_grandes: 55.00
        },
        {
            nome: "ChowChagas",
            distancia: 0.80,
            precoDS_pequenos: 30.00,
            precoDS_grandes: 45.00,
            precoFS_pequenos: 30.00,
            precoFS_grandes: 45.00
        },
    ];

    for (let i = 0; i < PetShops.length; i++) {
        let totalG, totalP, total;

        if (diaSemana > 0 && diaSemana < 6) {
            totalG = PetShops[i].precoDS_grandes * numGrandes;
            totalP = PetShops[i].precoDS_pequenos * numPequenos;
        } else {
            totalG = PetShops[i].precoFS_grandes * numGrandes;
            totalP = PetShops[i].precoFS_pequenos * numPequenos;
        }

        total = totalG + totalP;

        precos.push({
            nome: PetShops[i].nome,
            total: total,
            distancia: PetShops[i].distancia
        });
    }

    /* ordenação */
    precos.sort((a, b) => a.total - b.total);

    if(precos[0].valor==precos[1].valor==precos[2].valor){
        precos.sort((a, b) => a.distancia - b.distancia);
    }
    else if(precos[0].total==precos[1].total){
        let tmp = precos[0];
        precos[0] = precos[1];
        precos[1] = tmp;
    }

    return precos;
}

const Prices = () => {
    return (
        <h1>f</h1>
    );
}

export default Prices;
export { calculadora};

