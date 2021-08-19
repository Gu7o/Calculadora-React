import '../style.css';
const Botao = (props)=>{
    return(
        <button className={props.estilo}>{props.text}</button>
    )
};
export default Botao;