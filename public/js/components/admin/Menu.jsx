import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

  const username = "ご主人";

  return (
    <div>
      <div>
        <p>おかえりなさいませ{username}さま！</p>
      </div>
      <div>
        <img src="../../../assets/images/job_maid_meido_kissa.png" />
      </div>
      <div>
        <p>ご注文はどちらになさいますか？</p>
        <div>
          <Link to="/admin/add-user">
            <button>管理者を追加</button>
          </Link>
          <Link to="admin/edit-user">
            <button>管理者情報を編集・削除</button>
          </Link>
        </div>
        <div>
          <Link to="admin/add-song">
            <button>歌詞を追加</button>
          </Link>
          <Link to="admin/edit-song">
            <button>歌詞を編集・削除</button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button>もどる</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
