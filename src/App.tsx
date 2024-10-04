import React from "react";
import Button from "./components/Button";

const App = (): JSX.Element => {
  return <>
    <Button onClick={()=>{alert("버튼 클릭")}}>로그인</Button>
  </>;
};

export default App;
