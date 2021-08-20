import '../style.css';
import Display from '../components/Display';
import Botao from '../components/Botao';
import React, { useState } from 'react';


var estado;
var op1;
var op2;
var resultado;
var operacao;
var numeroArray = new Array();


const Calculadora = () => {
    
    const [numero, setNumero] = useState(0);

    var estado;
    var op1;
    var op2;
    var resultado;
    var operacao;
    var sinal;
   
    function operator (operacao){

       switch (operacao){
   
           case 'adicao':
               sinal = 'adicao';
               estado='operando2';
               numeroArray=[];
               console.log('adicao');
               operacao = 'reset';
           break;

           case 'divisao':
               sinal = 'divisao';
               estado='operando2';
               console.log('divisao')
               numeroArray=[];
               break;
   
           case 'multiplicacao':
               sinal = 'multiplicacao';
               estado='operando2';
               numeroArray=[];
               break;
            
            case 'subtracao':
               sinal = 'subtracao';
               estado='operando2';
               numeroArray=[];
               break;
       }
   }        
    function iniciacao(){
        estado='inicializacao';
        setNumero();
    };


    function ac (){
        this.inicializacao();
        numeroArray=[];
    };
    



        
    return (
        <div className='container'>
            <div className='display'>{numero}</div>
            <Botao estilo='botao2' onClick={() => setNumero(numero + 1)} text='AC'/>
            <Botao estilo='botao' text='DEL'/>
            <Botao estilo='botao' onClick ={operator('divisao')} text='/'/>
            <Botao estilo='botao' text='1'/>
            <Botao estilo='botao' text='2'/>
            <Botao estilo='botao' text='3'/>
            <Botao estilo='botao' text='*'/>
            <Botao estilo='botao' text='4'/>
            <Botao estilo='botao' text='5'/>
            <Botao estilo='botao' text='6'/>
            <Botao estilo='botao' onClick ={operator('adicao')} text='+'/>
            <Botao estilo='botao' text='7'/>
            <Botao estilo='botao' text='8'/>
            <Botao estilo='botao' text='9'/>
            <Botao estilo='botao' text='-'/>
            <Botao estilo='botao' text='.'/>
            <Botao estilo='botao' text='0'/>
            <Botao estilo='botao2' text='='/>

        
            
            
            
        </div>
    );
   
}





export default Calculadora;