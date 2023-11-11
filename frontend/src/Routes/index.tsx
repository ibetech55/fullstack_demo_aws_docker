import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteTemplate } from "../Components/SiteTemplate";
import Home from "../Pages/Home";
import Quote from "../Pages/Quote";

const SiteRoutes = () => {
  return (
    <React.Fragment>
      <SiteTemplate>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/:id" Component={Quote} />
          </Routes>
        </BrowserRouter>
      </SiteTemplate>
    </React.Fragment>
  );
};

export { SiteRoutes };
