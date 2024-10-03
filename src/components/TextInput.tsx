import React, { useState } from 'react';
import styled from 'styled-components';
import cautionIcon from '../assets/caution.svg';

interface InputContainerProps {
  isValid: boolean;
}

const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  border: 2px solid ${({ isValid }) => (isValid ? '#707583' : '#ff0000')};
  border-radius: 14px;
  padding: 10px;
  width: 100%;
  max-width: 500px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #1f262c;
  font-size: 11px;
`;

const ErrorMessage = styled.p<{ isValid: boolean }>`
  color: #ff0000;
  font-size: 12px;
  margin-top: 5px;
  font-weight: 900;
  visibility: ${({ isValid }) => (isValid ? 'hidden' : 'visible')};
`;

const ErrorIcon = styled.img`
  margin-left: 10px;
  margin-right: 2px;
  float: left;
  margin-top: 0.8px;
`;

interface TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => boolean;
  errorMessage?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder = '',
  value = '',
  onChange,
  errorMessage = '',
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const valid = onChange(newValue);
    setIsValid(valid);
  };

  return (
    <div>
      <Label>{label}</Label>
      <InputContainer isValid={isValid}>
        <StyledInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      </InputContainer>
      <ErrorMessage isValid={isValid}>
        <ErrorIcon src={cautionIcon} alt='Input caution' />
        {errorMessage}
      </ErrorMessage>
    </div>
  );
};

export default TextInput;
