import { useState } from "react";
import styled from "styled-components";
import Major from "../../types/major";

interface BottomSheetProps {
  value: Major;
  onSelected: (major: Major) => void;
}

export const sheetController = { open: () => {}, close: () => {} };

const MajorBottomSheet = ({ value, onSelected }: BottomSheetProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  sheetController.open = () => setIsShowing(true);
  sheetController.close = () => setIsShowing(false);

  return (
    <>
      {isShowing && (
        <Background onClick={sheetController.close}>
          <MajorList>
            {Object.keys(Major).map((e, i) => (
              <MajorItem
                key={i}
                selected={value === e}
                onClick={() => onSelected(e as Major)}
              >
                {e.toLowerCase()}
              </MajorItem>
            ))}
          </MajorList>
        </Background>
      )}
    </>
  );
};

export default MajorBottomSheet;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #00000033;
  z-index: 1;
`;

const MajorList = styled.div`
  margin-top: 40vh;
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;

  background-color: white;
`;

const MajorItem = styled.div<{ selected?: boolean }>`
  width: 100vw;
  height: 50px;
  font-size: 24px;
  color: ${({ selected }) => (selected ? "#1B69FF" : "#707583")};
  padding-left: 100px;
  cursor: pointer;
  border: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
`;
