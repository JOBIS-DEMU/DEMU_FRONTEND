import React, { useState } from "react";
import styled from "styled-components";
import visibleIcon from "../assets/visible.svg";
import invisibleIcon from "../assets/invisible.svg";
import cautionIcon from "../assets/caution.svg";

interface TextInputProps {
  label: string;
  placeholder?: string;
  hint?: string;
  value: string;
  onChange: (value: string) => boolean;
  errorMessage?: string;
  isPassword?: boolean;
}

const TextInput = ({
  label,
  placeholder = "",
  hint,
  onChange,
  value,
  errorMessage = "",
  isPassword = false,
}: TextInputProps) => {
  const [isValid, setIsValid] = useState(true);
  const [isVisible, setPasswordVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const valid = onChange(newValue);
    setIsValid(valid);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isVisible);
  };

  return (
    <div>
      <Label>{label}</Label>
      <InputContainer isValid={isValid}>
        {hint && (
          <Hint>{hint}</Hint>
        )}
        <StyledInput
          type={isPassword && !isVisible ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
        {isPassword && (
          <ToggleIcon onClick={togglePasswordVisibility}>
            <img
              src={!isVisible ? invisibleIcon : visibleIcon}
              alt="Toggle password visibility"
            />
          </ToggleIcon>
        )}
      </InputContainer>
      <ErrorMessage isValid={isValid}>
        <ErrorIcon src={cautionIcon} alt="Input caution" />
        {errorMessage}
      </ErrorMessage>
    </div>
  );
};

const InputContainer = styled.div<{ isValid: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  border: 2px solid ${({ isValid }) => (isValid ? "#707583" : "#ff0000")};
  border-radius: 14px;
  padding: 16px 10px;
  width: 100%;
  max-width: 500px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
  font-weight: 600;
  
  &::placeholder  {
    font-weight: 600;
    color: #98A4AF;
  }
`;

const ToggleIcon = styled.div`
  cursor: pointer;
  margin-left: 20px;
  color: #a0a3b1;
  scale: 0.8;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #1f262c;
  font-size: 13px;
`;

const ErrorMessage = styled.p<{ isValid: boolean }>`
  color: #ff0000;
  font-size: 12px;
  margin-top: 5px;
  font-weight: 900;
  visibility: ${({ isValid }) => (isValid ? "hidden" : "visible")};
`;

const ErrorIcon = styled.img`
  margin-left: 10px;
  margin-right: 2px;
  float: left;
  margin-top: 0.8px;
`;

const Hint = styled.span`
  position: absolute;
  color: #98A4AF;
  right: 10px;
`;

export default TextInput;
