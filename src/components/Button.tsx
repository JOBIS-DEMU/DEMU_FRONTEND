import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  disabled = false,
  onClick,
}:ButtonProps) => {
  return (
    <ButtonBase disabled={disabled} onClick={onClick}>
      {children}
    </ButtonBase>
  );
};

const ButtonBase = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 64px;
  max-width: 450px;
  width: 100%;
  min-height: 45px;
  max-height: 80px;
  height: 100%;
  border: none;
  border-radius: 20px;
  padding: 10px 12px;
  cursor: pointer;
  background-color: #1B69FF;
  opacity: ${({ disabled }) => (disabled ? "0.75" : "1")};

  &:active {
    background-color: ${({ disabled }) => (disabled ? "#1B69FF" : "#0042C2")};
    opacity: 0.75;
  }

  color: white;
  font-size: 21.25px;
  font-weight: 700;

  line-height: 1.2;
  overflow: hidden;

  user-select: none;

  transition: background-color 0.1s ease;
`;

export default Button;
