import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
`;

const InputLabel = styled.span`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #0077cc;
    box-shadow: 0 0 0 2px rgba(0, 119, 204, 0.2);
  }
`;

function InputGroup() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');

  function handleNomeChange(event) {
    setNome(event.target.value);
  }

  function handleSobrenomeChange(event) {
    setSobrenome(event.target.value);
  }

  function handleDataNascimentoChange(event) {
    setDataNascimento(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <FormWrapper>
      <InputWrapper>
        <InputLabel>Nome:</InputLabel>
        <Input type="text" value={nome} onChange={handleNomeChange} />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>Sobrenome:</InputLabel>
        <Input type="text" value={sobrenome} onChange={handleSobrenomeChange} />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>Data de Nascimento:</InputLabel>
        <Input type="date" value={dataNascimento} onChange={handleDataNascimentoChange} />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>Email:</InputLabel>
        <Input type="email" value={email} onChange={handleEmailChange} />
      </InputWrapper>
    </FormWrapper>
  );
}

export default InputGroup;
