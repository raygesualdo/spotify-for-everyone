// Contants
const URI_REGEX = /^spotify:[a-zA-Z0-9:]+$/;
const LINK_REGEX = /^https?:\/\/(open|play)\.spotify.com\/([\w\-\/]+)\??.*$/;
const OPEN_REGEX = /open\.spotify/;
const PLAY_REGEX = /play\.spotify/;
const IFRAME_REGEX = /^<iframe.*?src="https?:\/\/embed\.spotify\.com\/?\?uri=[\w%]+"/;

// Regex tests/matchers
export const test = regex => value => regex.test(value);
export const uriTest = test(URI_REGEX);
export const linkTest = test(LINK_REGEX);
export const openTest = test(OPEN_REGEX);
export const playTest = test(PLAY_REGEX);
export const iframeTest = test(IFRAME_REGEX);
export const match = regex => value => value.match(regex);
export const linkMatch = match(LINK_REGEX)
export const iframeMatch = match(IFRAME_REGEX);
export const isValid = value => uriTest(value) || linkTest(value) || iframeTest(value);

// Encoding/decoding
export const encodeUri = encodeURIComponent;
export const decodeUri = decodeURIComponent;
export const convertPathToUri = value => `spotify:${value.replace('/', ':')}`;
export const getUri = value => {
  if (!isValid(value)) {
    throw Error(`Value "${value}" does not match anything.`);
  }
  if (uriTest(value)) {
    return value;
  }
  if (linkTest(value)) {
    const [, , path] = linkMatch(value);
    return convertPathToUri(path);
  }
  if (iframeTest(value)) {
    const [, uri] = iframeMatch(value);
    return uri;
  }
}
export const getEncodedUri = value => encodeUri(getUri(value));
