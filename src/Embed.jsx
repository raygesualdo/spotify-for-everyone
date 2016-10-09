import React from 'react';
import { Link, propTypes } from 'react-router';
import { decodeUri } from './utils';
import styles from './Embed.css';

const Embed = props => (
  <div className={styles.container}>
    <iframe src={`https://embed.spotify.com/?uri=${decodeUri(props.params.uri)}`} className={styles.iframe} allowTransparency />
    <Link to="/" className={styles.link}>
      <svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 8h-2.086l1.293-1.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-3.707 3.707 3.707 3.707c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-1.293-1.293h2.086c1.379 0 2.5 1.346 2.5 3s-1.346 3-3 3h-8c-1.654 0-3-1.346-3-3s1.346-3 3-3c.553 0 1-.448 1-1s-.447-1-1-1c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c2.757 0 5-2.243 5-5s-2.019-5-4.5-5z"/></svg>
      Create another widget
    </Link>
  </div>
)

// TODO: remove when this bug is squashed
delete propTypes.__esModule;
Embed.propTypes = {
  ...propTypes
};

export default Embed;
