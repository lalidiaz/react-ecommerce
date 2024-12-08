import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">E-commerce app layout</span>
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
