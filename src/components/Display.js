import '../style.css';
import React, { useState } from 'react';



const Display = (props) => {

        var [numero, setNumero] = useState('oi');

        function atualiza (){
            setNumero(props.valor)
        }
    return (
        <div className='display'>
        </div>
    );
};
export default Display;