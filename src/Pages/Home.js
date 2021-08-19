import '../style.css';
import Display from '../components/Display';
import Botao from '../components/Botao';


const Calculadora = () => {
    return (
        <div className='container'>
            <Display valor = 'Gustavo'/>
            <Botao estilo='botao2' text='AC'/>
            <Botao estilo='botao' text='DEL'/>
            <Botao estilo='botao' text='/'/>
            <Botao estilo='botao' text='1'/>
            <Botao estilo='botao' text='2'/>
            <Botao estilo='botao' text='3'/>
            <Botao estilo='botao' text='*'/>
            <Botao estilo='botao' text='4'/>
            <Botao estilo='botao' text='5'/>
            <Botao estilo='botao' text='6'/>
            <Botao estilo='botao' text='+'/>
            <Botao estilo='botao' text='7'/>
            <Botao estilo='botao' text='8'/>
            <Botao estilo='botao' text='9'/>
            <Botao estilo='botao' text='-'/>
            <Botao estilo='botao' text='.'/>
            <Botao estilo='botao' text='0'/>
            <Botao estilo='botao2' text='='/>

            <script type="text/javascript">operations.inicializacao();</script>
            <script type="text/javascript">Display.atualiza();</script>
            
            
        </div>
    );
   
}

var estado;
var op1;
var op2;
var resultado;
var operacao;


let operations = {

    numeroArray : new Array(),
    
    inicializacao : function(){
        estado='inicializacao';
        //console.log('inicializei');
        this.display();
    },
    
    adicao : function () {
        operacao = 'adicao';
        estado='operando2';
        this.numeroArray=[]; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },
    
    subtracao : function(){
        operacao = 'subtracao';
        estado='operando2';
        //console.log('passei na subtracao');
        this.numeroArray=[]; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },
    
    divisao : function (){
        operacao = 'divisao';
        estado='operando2';
        this.numeroArray=[]; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },
    
    multiplicacao : function (){
        operacao = 'multiplicacao';
        estado='operando2';
        this.numeroArray=[]; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },

    ac : function(){
        this.inicializacao();
        this.numeroArray=[];
    },
    
    del : function(){
        this.numeroArray.pop();
        this.proximoNumero();
        this.display();
    },
    
    igual : function(){
        switch (operacao){
            
            case 'adicao':
            resultado = op1+op2;
            estado ='resultado';
            this.display();
            break;

            case 'subtracao':
            resultado = op1-op2;
            estado ='resultado';
            this.display();
            break;

            case 'divisao':
            resultado = op1/op2;
            estado ='resultado'
            this.display();
            break;

            case 'multiplicacao':
            resultado = op1*op2;
            estado ='resultado'
            this.display();
            break;
            
        }
            
    },
    display : function (){
        switch (estado){

            case'inicializacao':
                console.log('passei inicialização');
                estado='operando1';
                return ('Display');
                break;

            case 'operando1':
                //console.log('passei operando1');
                return (op1);
                break;
            
            case 'operando2':
                //console.log('passei operando2');
                return (op2);
                break;
            
            case 'resultado':
                //console.log('passei Resultado');
                estado='operando1';
                return (resultado);
                break;
        }

    },
  
    
    proximoNumero: function(digito){
                    switch (estado){
                        case'operando1':
                            this.numeroArray.push(digito);
                            op1=parseFloat(this.numeroArray.join(''));
                            //console.log(op1);
                            //console.log(typeof(op1));
                            this.display();
                            break
                        case 'operando2':
                            this.numeroArray.push(digito);
                            op2=parseFloat(this.numeroArray.join(''));
                            //console.log(op2);
                            //this.display();
                            break
                    }


    },

}


export default Calculadora;