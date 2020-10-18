import React from 'react';
import { Link } from 'react-router-dom';

const AddSong = () => {
  return (
    <div className="admin-page">
      <h1>曲を追加</h1>
      <Link to="/admin">
        <button>もどる</button>
      </Link>
    </div>
  );
}

export default AddSong;