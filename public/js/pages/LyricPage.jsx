import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logPath } from '../helper/logPath'
import { Link } from 'react-router-dom';
import { Note, SongsTable } from '../components/lyric';

import { kite, young } from '../components/lyric/songData';
import { compare } from '../helper/compare';

const songs = [
  {
    id: kite.id,
    title: kite.title,
    titleJP: kite.titleJP,
    story: kite.story,
    lyric: kite.lyric,
  },
  {
    id: young.id,
    title: young.title,
    titleJP: young.titleJP,
    story: young.story,
    lyric: young.lyric,
  }
];

const LyricPage = () => {

  const dispatch = useDispatch();
  // const selector = useSelector(state => state);

  logPath();

  const sortedSongs = songs.slice().sort(compare);
  const [isPreview, setIsPreview] = useState(false);
  const [displaySong, setDisplaySong] = useState({});

  const hundleClick = useCallback((displaySong) => {
    console.log(displaySong);
    if (!isPreview) {
      setDisplaySong(displaySong);
      setIsPreview(true);
    }
  }, []);

  const noteClose = useCallback(() => {
    setIsPreview(false);
  }, [])

  return (
    <article>
      {isPreview && (
        <Note
          isPreview={isPreview}
          noteClose={noteClose}
          song={displaySong}
        />
      )}
      <p>coding...</p>
      <p><a href="./index.html">トップページ</a></p>
      <h1>歌詞の記録</h1>
      <Link to="/admin"><button>管理者ページ</button></Link>
      <SongsTable
        songs={sortedSongs}
        hundleClick={hundleClick}
      />
    </article>
  );
}

export default LyricPage;