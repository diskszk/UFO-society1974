import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
  const inputConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    console.log(`email changed: ${email}`);
  }, [email])

  return (
    <div className="signup-container admin-page">
      <h1>管理者登録</h1>
      <div className="input-list">
        <label htmlFor="email">e-mail </label>
        <input
          type="email"
          id="email"
          required={true}
          value={email}
          onChange={inputEmail}
          placeholder="emailを入力してください"
        />
      </div>
      <div className="input-list">
        <label htmlFor="password">パスワード </label>
        <input
          type="password"
          id="password"
          required={true}
          value={password}
          onChange={inputPassword}
          placeholder="パスワードを入力してください"
        />
      </div>
      <div className="input-list">
        <label htmlFor="confirmPassword">確認用パスワード </label>
        <input
          type="password"
          id="confirmPassword"
          required={true}
          value={confirmPassword}
          onChange={inputConfirmPassword}
          placeholder="確認用を入力してください"
        />
      </div>
      <div className="input-list">
        <label htmlFor="selectRole">権限を選択してください</label>
        <select id="selectRole">
          <option value="editer">バンドメンバー</option>
          <option value="addmin">最高権限</option>
          <option value="viewer">テスト</option>
        </select>
      </div>
      <div>
        <button className="btn">登録する</button>
      </div>
      <Link to="/admin">
        <button>もどる</button>
      </Link>
    </div>
  );
}

export default AddUser;