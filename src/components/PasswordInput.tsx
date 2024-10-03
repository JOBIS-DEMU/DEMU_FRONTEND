import React, { useState } from 'react';
import styled from 'styled-components';
import visibleIcon from '../assets/visible.svg';
import invisibleIcon from '../assets/invisible.svg';
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

const ToggleIcon = styled.div`
  cursor: pointer;
  margin-left: 20px;
  color: #a0a3b1;
  scale: 0.8;
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

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => boolean;
  errorMessage?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder = '',
  value = '',
  onChange,
  errorMessage = '',
}) => {
  const [isVisible, setPasswordVisible] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isVisible);
  };

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
          type={isVisible ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
        <ToggleIcon onClick={togglePasswordVisibility}>
          <img src={!isVisible ? invisibleIcon : visibleIcon} alt="Toggle password visibility" />
        </ToggleIcon>
      </InputContainer>
      <ErrorMessage isValid={isValid}>
        <ErrorIcon src={cautionIcon} alt='Input caution' />
        {errorMessage}
      </ErrorMessage>
    </div>
  );
};

export default PasswordInput;
