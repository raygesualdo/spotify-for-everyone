import React, { PropTypes } from 'react';
import styles from './Home.css';

const dtStyle = bool => bool ? styles.dtActive : styles.dt;
const Link = props => <a href={props.href} title={props.children} target="_blank">{props.children}</a>;

const Home = props => (
  <div className={styles.container}>
    <h1 className={styles.title}>Spotify for Everyone</h1>
    <p>Input any link to a Spotify resource and generate a page with an embedded Spotify widget. Easy as pie. Items that qualify as "links" are listed below.</p>
    <dl className={styles.list}>
      <dt className={dtStyle(props.isUri)}>URIs</dt>
      <dd className={styles.dd}>
        spotify:album:3fUKGTsiYL1kSroBWBLmmR<br />
        spotify:user:1235272817:playlist:4frTfbFubojqmIzp3SVTF6<br />
        spotify:artist:5sXaGoRLSpd7VeyZrLkKwt
      </dd>
      <dt className={dtStyle(props.isIframe)}>Embed iframe code</dt>
      <dd className={styles.dd}>{`<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A30XRmWTdvcHHMUEVTB8aIL" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>`}</dd>
      <dt className={dtStyle(props.isPlayLink)}>Spotify Web Player Links</dt>
      <dd className={styles.dd}>{`https://play.spotify.com/album/6hIcvEfAHabZR1AnurnHWD`}</dd>
      <dt className={dtStyle(props.isOpenLink)}>Spotify Open Links</dt>
      <dd className={styles.dd}>{`https://open.spotify.com/album/4US3nmuLIKELhVZdBPiKxx`}</dd>
    </dl>
    <input name="link" value={props.linkValue} placeholder="Input link here" onChange={props.handleInputChange} className={styles.input} />
    <p className={props.isValid || props.linkValue === '' ? styles.isValidTrue : styles.isValidFalse}>Link is not valid!</p>
    <button type="button" onClick={props.processLink} className={styles.button}>Get Widget</button>
    <div className={styles.disclaimer}>
      <p>See the code on <Link href="https://github.com/raygesualdo/spotify-for-everyone">GitHub</Link> | Proudly hosted on <Link href="https://surge.sh">Surge</Link></p>
      <p>Created using the fantastic <Link href="https://github.com/facebookincubator/create-react-app">create-react-app</Link></p>
      <p>This tool is neither affiliated with nor endorsed by Spotify AB</p>
    </div>
  </div>
);

Home.propTypes = {
  linkValue: PropTypes.string.isRequired,
  isUri: PropTypes.bool.isRequired,
  isLink: PropTypes.bool.isRequired,
  isOpenLink: PropTypes.bool.isRequired,
  isPlayLink: PropTypes.bool.isRequired,
  isIframe: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  processLink: PropTypes.func.isRequired
};

export default Home;
