import '../style.css';
import Display from '../components/Display';
import Botao from '../components/Botao';




const Calculadora = () => {
    return (
        <div className='container'>
            <Display />
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
            
            
        </div>
    );
   
}

export default Calculadora;