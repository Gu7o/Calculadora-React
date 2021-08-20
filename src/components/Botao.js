import '../style.css';
const Botao = (props)=>{
    return(
        <button className={props.estilo} onClick={props.onClick}>{props.text}</button>
    )
};
export default Botao;