import { useState } from 'react';
import '../../stylesheets/ValidInput.module.css';

function InputValidado({ 
  type = 'text', 
  name, 
  placeholder, 
  validate, 
  onChange 
}) {
  const [valor, setValor] = useState('');
  const [estado, setEstado] = useState(null);

  const handleChange = (e) => {
    const nuevoValor = e.target.value;
    setValor(nuevoValor);

    let valido = null;
    if (nuevoValor === '') {
      valido = null;
    } else {
      valido = validate ? validate(nuevoValor) : true;
    }

    setEstado(valido);
    if (onChange) {
      onChange(name, nuevoValor, valido);
    }
  };

  const claseEstilo =
    estado === null
      ? 'input-base'
      : estado
      ? 'input-base input-valido'
      : 'input-base input-error';

  return (
    <input
      type={type}
      name={name}
      value={valor}
      onChange={handleChange}
      placeholder={placeholder}
      className={claseEstilo}
    />
  );
}

export default InputValidado;