import React from 'react';
import { LoginPage, AdminPage, LyricPage, SignupPage } from './pages';
import { Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

const App = () => {

  const selector = useSelector(state => state);
  console.log(selector.router);

  // いまいるページのURLを取得
  const rootPath = selector.router.location.pathname
  // console.log(rootPath);

  // /develop.html#/loginでloginにアクセスできる・・・なぜ
  return (
    <>
      <Route exact path={"/"} component={LyricPage} />
      <Route exact path={"/admin"} component={AdminPage} />

      <Route exact path={"/login"} component={LoginPage} />
      <Route exact path={"/signup"} component={SignupPage} />
    </>
  );
}

export default App;