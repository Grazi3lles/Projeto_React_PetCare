import React from "react";
import FormDog from '../assets/FormDog.png';
import {calculadora} from './calculadora';


const Formulario = () => {

    const ClickCalc = (e) => {
        e.preventDefault();

        /*dados*/
        const dia = parseInt(document.querySelector('#day').value);
        const mes = parseInt(document.querySelector('#month').value);
        const ano = parseInt(document.querySelector('#year').value);
        const respContainer = document.querySelector('.resultado');



        const numGrandes = parseInt(document.querySelector('#bigDogs').value);
        const numPequenos = parseInt(document.querySelector('#smallDogs').value);

        let verified = true;

        if ((numGrandes === null || numPequenos === null) || (numGrandes === 0 && numPequenos === 0)) {
            alert("Coloque ao menos um cachorro");       
            respContainer.style.display = 'none';
            verified = false;
        } else if (isNaN(numGrandes) || isNaN(numPequenos)) {
            alert("Número inválido de cachorros");
            respContainer.style.display = 'none';
            verified = false;
        }
        

        if((dia !== 0 && !isNaN(dia)) && (mes !== 0 && !isNaN(mes)) && (ano !== 0 && !isNaN(ano))){

        }
        else{
            alert("preencha datas corretamente!")
            respContainer.style.display = 'none';
            verified=false;
        }

        const data = new Date(`${ano}-${mes}-${dia}`); 
        const diaSemana = data.getDay(); 

        
        const MaisBarato = calculadora(diaSemana, numGrandes, numPequenos);

        console.log(MaisBarato);

        const nome = document.querySelector('.Nome');
        nome.textContent = MaisBarato[0].nome;
        const price = document.querySelector('.preço');
        price.textContent = "-  R$"+MaisBarato[0].total+",00";

        
        if(verified==true){
            respContainer.style.display = 'flex';
        }
        
    }

    return(
        <section className="Formulario">
            <div className="div-form">
                <div className="feature-form">
                    <p>Encontre o lugar com o melhor preço !</p>
                    <img src={FormDog} alt="dog"></img>
                </div>

                <form className="form">
                    <h4>Insira a data que deseja(dd/mm/aaaa):</h4>
                    <div className="data">
                            <input type="number" id="day" min="1" max="31" required />
                        <label for="month">\</label>
                            <input type="number" id="month" min="1" max="12" required />
                        <label for="year">\</label>
                            <input type="number" id="year" min="1" required />
                    </div>
                    <p id="alerta"></p>

                    <div className="numDogs">
                    <h4>Insira o número de cachorros:</h4>
                    <table >
                        <tr>
                            <td><label for="bigDogs" >Grandes:</label></td>
                            <td><input type="number" id="bigDogs" min="0"/></td>
                        </tr>
                        <tr>
                            <td><label for="smallDogs">Pequenos:</label></td>
                            <td><input type="number" id="smallDogs" min="0"/></td>
                        </tr>
                    </table>
                    </div>

                    <button onClick={ClickCalc}>Pesquisar</button>


                    <div className="resultado">
                        <h3 className="Nome"></h3>
                        <h3 className="preço"></h3>
                    </div>
                </form>

            </div>
        </section>
    );    
}

export default Formulario;
