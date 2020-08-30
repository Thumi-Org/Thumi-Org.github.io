import React from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Content from './Components/Content';
import Footer from './Components/Footer';
import RightMenu from './Components/RightMenu';

import defaultConfiguration from './../default-config.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      configuration: defaultConfiguration
    };
  }

  componentDidMount() {
    fetch('/site-configuration.json')
      .then(response => response.json())
      .then(data => this.setState({ configuration: data }));
  }

  render() {
    const { configuration } = this.state;
    const { publications, meta, socialMediaLinks, recentRelease } = configuration || {};
    return (
      <div>
        <div id="wrapper">
					<Header meta={meta} />
					<Menu />
					<Content publications={publications} meta={meta} recentPublication={recentRelease} />
					<Footer socialMediaLinks={socialMediaLinks} />
        </div>
        <RightMenu />
      </div>
			
    );
  }
}

export default App;
