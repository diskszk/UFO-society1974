import React from 'react';
import { LoginPage, AdminPage, LyricPage, SignupPage, AddUser, EditUser, AddSong } from './pages';
import { Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import EditSong from './pages/EditSong';

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

      <Route exact path={"/admin/add-user"} component={AddUser} />
      <Route exact path={"/admin/edit-user"} component={EditUser} />
      <Route exact path={"/admin/add-song"} component={AddSong} />
      <Route exact path={"/admin/edit-song"} component={EditSong} />
    </>
  );
}

export default App;