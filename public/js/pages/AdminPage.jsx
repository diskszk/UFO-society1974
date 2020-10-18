import React, { useCallback, useState } from 'react';
import Menu from '../components/admin/Menu';
import { logPath } from '../helper/logPath';

const AdminPage = () => {

  logPath();

  return (
    <div className="admin-page">
      <h1>管理者ページ</h1>
      <Menu />
    </div>
  );
}

export default AdminPage;