import React, { useState } from 'react';
import styles from './index.module.css';

const Input = ({ children }) => {
    // Estado para almacenar la información ingresada por el usuario
    const [inputText, setInputText] = useState('');
    // Estado para almacenar la información enviada
    const [submittedText, setSubmittedText] = useState('');

    // Función para manejar cambios en el input
    const handleInputChange = (event) => {
        setInputText(event.target.value);  // Actualiza el estado con el valor del input
    };

    // Función para manejar el envío del formulario
    const handleSubmit = () => {
        setSubmittedText(inputText); // Almacena el valor actual del input
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputText} 
                onChange={handleInputChange} 
                placeholder="Ingresa tu información aquí" 
                className={styles.input}
            />
            {/* Botón para enviar la información */}
            <button onClick={handleSubmit} className={styles.submitButton}>
                Enviar
            </button>
            {/* Mostrar la información solo después de pulsar el botón */}
            {children(submittedText)}
        </div>
    );
};

export default Input;