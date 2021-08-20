import '../style.css';
import Display from '../components/Display';
import Botao from '../components/Botao';
import React, { useState } from 'react';


var estado = 'operando1';
var op1;
var op2;
var resultado;
var conta;
var numeroArray = new Array();


const Calculadora = () => {
    
    const [numero, setNumero] = useState(9);





function mostrarNumero(){
/*Funcao mostraNumero que mostra no display o numero do operador 1 , operador 2 ou o resultado. Importante que 
a parte condicional fique dentro do setNumero pois hooks nao podem estar dentro de loops,
condicionais ou nested functions*/
    setNumero(()=>{
        if (estado= 'operando1'){
            op1=parseFloat(numeroArray.join(''));
            //setNumero(op1); parece que hooks nao podem ser chamados dentro de condicionais
            return op1;
            console.log(op1);
        }
        if (estado= 'operando2'){
            return op2;
            console.log(op2);
        }
        if (estado= 'resultado'){
           return resultado;
           console.log(resultado);
        }
        if (estado ='Display'){
            return 'Display'
        }

    })
    
}
function proximoNumero (digito){
    //Funcao que adiciona no array o proximo numero e vai montando o operando 1 ou 2
    numeroArray.push(digito);
    console.log('passei proximo numero');
    console.log(estado)
    mostrarNumero();

}
function clear (){
    /*Funcao clear : reseta o numero array alem de trazer o programa de volta pro estado
    'operando1' */
    setNumero(0);
    numeroArray = [];
    estado = 'operando1';
}

function operacao (sinal){
    /* Funcao Operacao : ela recebe dos botoes o sinal e dependendo do sinal ela vai mudar o 
valor da variavel conta,futamente usado pra determinar a operacao, e mudar o estado para 
'operando2' a fim do proximo numero digitado ser armazenado no segundo operador*/
    switch (sinal){
        case 'soma':
            estado = 'operando2';
            conta = sinal; 
            break;
        case 'subtracao':
            estado = 'operando2';
            conta = sinal; 
            break;

        case 'multiplicacao':
            estado = 'operando2';
            conta = sinal; 
            break;
        case 'divisao':
            estado = 'operando2';
            conta = sinal; 
            break;          
    }
}


        
    return (
        <div className='container'>
            <div className='display'>{numero}</div>
            <Botao estilo='botao2' onClick={() => {clear()}} text='AC'/>
            <Botao estilo='botao' text='DEL'/>
            <Botao estilo='botao' text='/'/>
            <Botao estilo='botao' onClick= {()=>{proximoNumero(1)}} text='1'/>
            <Botao estilo='botao' onClick= {()=>{proximoNumero(2)}} text='2'/>
            <Botao estilo='botao' onClick= {()=>{proximoNumero(3)}} text='3'/>
            <Botao estilo='botao' text='*'/>
            <Botao estilo='botao' onClick= {()=>{proximoNumero(4)}} text='4'/>
            <Botao estilo='botao' onClick= {()=>{proximoNumero(5)}} text='5'/>
            <Botao estilo='botao' onClick= {()=>{proximoNumero(6)}} text='6'/>
            <Botao estilo='botao' text='+'/>
            <Botao estilo='botao' onClick= {()=>{proximoNumero(7)}} text='7'/>
            <Botao estilo='botao' onClick= {()=>{proximoNumero(8)}} text='8'/>
            <Botao estilo='botao' onClick= {()=>{proximoNumero(9)}} text='9'/>
            <Botao estilo='botao' text='-'/>
            <Botao estilo='botao' text='.'/>
            <Botao estilo='botao' onClick= {()=>{proximoNumero(0)}} text='0'/>
            <Botao estilo='botao2' text='='/>
            
        </div>
    );
   
}


export default Calculadora;