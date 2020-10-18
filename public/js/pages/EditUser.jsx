import React from 'react';
import { Link } from 'react-router-dom';

const EditUser = () => {
  return (
    <div className="admin-page">
      <h1>アカウント編集</h1>
      <Link to="/admin">
        <button>もどる</button>
      </Link>
    </div>
  );
}

export default EditUser;