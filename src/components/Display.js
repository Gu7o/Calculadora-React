import '../style.css';
import React, { useState } from 'react';



const Display = (props) => {

        var [numero, setNumero] = useState('oi');

        function atualiza (){
            setNumero(numero => props.valor)
        }
    return (
        <div className='display'>
            {numero}
        </div>
    );
};
export default Display;