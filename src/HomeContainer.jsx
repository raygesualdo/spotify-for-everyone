import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Home from './Home';
import { uriTest, linkTest, openTest, playTest, iframeTest, isValid, getEncodedUri } from './utils';

export default class HomeContainer extends Component {
  state = {
    linkValue: '',
    isUri: false,
    isLink: false,
    isOpenLink: false,
    isPlayLink: false,
    isIframe: false,
    isValid: false,
    uri: ''
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      linkValue: value,
      isUri: uriTest(value),
      isLink: linkTest(value),
      isOpenLink: openTest(value),
      isPlayLink: playTest(value),
      isIframe: iframeTest(value),
      isValid: isValid(value)
    });
  }

  processLink = () => {
    if (!isValid(this.state.linkValue)) return alert('Link is not valid.');
    this.setState({
      uri: getEncodedUri(this.state.linkValue)
    });
  }

  render() {
    if (this.state.uri) return <Redirect to={`/embed/${this.state.uri}`} />;
    const props = {
      ...this.state,
      handleInputChange: this.handleInputChange,
      processLink: this.processLink
    };
    return <Home {...props} />;
  }
}
