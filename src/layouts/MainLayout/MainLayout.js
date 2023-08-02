import { Component } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header/Header";

class MainLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}

export { MainLayout };
