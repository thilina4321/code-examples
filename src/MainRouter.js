import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import First from "./pages/one/First";
import { routes } from "./pages/index";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<First />}></Route>
            {routes.map(({ path, element }, ind) => (
              <Route key={ind} path={path} element={element} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
