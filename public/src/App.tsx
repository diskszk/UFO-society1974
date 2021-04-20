import React from "react";
import Routes from "./Routes";
import styled from "styled-components";
import ModalWrapper from "./components/CustomModal";
import { useSelector } from "react-redux";
import { ModalStatus, RootStore } from "./types";

const Header = styled.header({
  marginTop: "16px",
});

const App: React.FC<{}> = () => {
  const modalStatus = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  return (
    <>
      {/* モーダル */}
      {modalStatus.isOpen && <ModalWrapper />}
      <Header>
        {/* <a href="/index.html">トップページ</a> */}
        <a href="https://diskszk.github.io/ufo-society1974/">トップページ</a>
      </Header>
      <main>
        <Routes />
      </main>
    </>
  );
};

export default App;