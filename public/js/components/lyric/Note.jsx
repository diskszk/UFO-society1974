import React, { useEffect } from 'react'
import Lyric from './Lyric'

// モーダルみたいに表示する
const Note = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="modal" onClick={props.noteClose}>
      <div className="modal-inner">
        <div className="modal-content note">
          <p className="song-title">{props.song.title}</p>
          <Lyric
            lyric={props.song.lyric}
          />
          <div className="btn-container">
            <button className="modal-close-btn" onClick={props.noteClose}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;