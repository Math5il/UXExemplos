import React, { useState } from 'react';
import './App.css';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFeedback(value);

    if (value.length < 10) {
      setError('O feedback deve conter pelo menos 10 caracteres.');
    } else {
      setError('');
    }
  };

  const handleCepChange = (e) => {
    const value = e.target.value;
    setCep(value);
    
    if (value.length === 8) {
      fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            setCidade(data.localidade);
            setEstado(data.uf);
            setError('');
          } else {
            setCidade('');
            setEstado('');
            setError('CEP inválido.');
          }
        })
        .catch(() => setError('Erro ao buscar CEP.'));
    } else {
      setCidade('');
      setEstado('');
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSubmitted(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.length >= 10) {
      setSubmitted(true);
      setFeedback('');
      setCep('');
      setCidade('');
      setEstado('');
    }
  };

  return (
    <div className="feedback-container">
      <h2>Envie seu Feedback</h2>
      {submitted ? (
        <>
          <div className="success-message">Obrigado pelo seu feedback!</div>
          <p>Deseja Enviar outro formulário?</p>
          <button className="success-button" type='button' onClick={handleClick}>Reenviar</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input placeholder='Digite seu nome' id='name' /><br/><br/>
            
            <label htmlFor="location">Da onde fala:</label><br/><br/>

            <label>Cep:</label>
            <input
              placeholder='Digite seu cep'
              id='cep'
              value={cep}
              onChange={handleCepChange}
            /><br/><br/>

            <label>Cidade:</label>
            <input
              placeholder='Digite sua cidade'
              value={cidade}
              readOnly
            /><br/><br/>

            <label>Estado:</label>
            <input
              placeholder='Digite seu estado'
              value={estado}
              readOnly
            /><br/><br/>

            <label htmlFor="feedback">Escreva seu feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={handleInputChange}
              className={error ? 'input-error' : ''}
              placeholder="Deixe seu feedback aqui..."
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          <button type="submit" disabled={!!error || feedback === ''}>
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}

export default FeedbackForm;
