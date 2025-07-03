
import React, { useState } from 'react';
import styles from './likebutton.module.css';

const LikeButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LikeButton</h1>
      <div className={styles.row}>
        <span className={styles.icon} onClick={liked ? undefined : handleClick} style={{ cursor: liked ? 'default' : 'pointer' }}>
          {liked ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="black"><path d="M2 21h18a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-6.31l.95-4.57.03-.32a1 1 0 0 0-.29-.7l-1-1-7.59 7.59A2 2 0 0 0 2 13v6a2 2 0 0 0 2 2z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21h18a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-6.31l.95-4.57.03-.32a1 1 0 0 0-.29-.7l-1-1-7.59 7.59A2 2 0 0 0 2 13v6a2 2 0 0 0 2 2z"/></svg>
          )}
        </span>
        <span className={styles.text}>
          {liked ? 'Thank you !' : 'Click like if this post is useful to you !'}
        </span>
      </div>
    </div>
  );
};

export default LikeButton;
