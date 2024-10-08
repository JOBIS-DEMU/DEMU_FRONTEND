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
  height: 100px;
  border: none;
  border-radius: 20px;
  padding: 10px 12px;
  cursor: pointer;
  background-color: ${({ disabled }) => (disabled ? "#1B69FFBF" : "#1B69FF")};

  &:active {
    background-color: #0042c2;
  }

  color: ${({ disabled }) => (disabled ? "#FFFFFFBF" : "#FFFFFF")};
  font-size: 21.25px;
  font-weight: 700;

  line-height: 1.2;
  overflow: hidden;

  user-select: none;

  transition: background-color 0.1s ease;
`;

export default Button;
