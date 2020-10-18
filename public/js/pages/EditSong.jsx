import React from 'react';
import { Link } from 'react-router-dom';

const EditSong = () => {
  return (
    <div className="admin-page">
      <h1>曲編集</h1>
      <Link to="/admin">
        <button>もどる</button>
      </Link>
    </div>
  );
}

export default EditSong;