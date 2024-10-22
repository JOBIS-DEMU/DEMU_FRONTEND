import { Outlet } from "react-router-dom";
import { HeaderMenu } from "src/components/homePage";

const layout = () => {
  return (
    <>
      <HeaderMenu />
      <Outlet />
    </>
  );
};

export default layout;
