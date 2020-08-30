import React from 'react';

class Header extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { meta } = this.props;
    const { title } = meta || {};
    return (
      <header id="header">
        <div className="inner">
          <a href="index.html" className="logo">
            <span className="symbol">
              <img src="images/thumi-logo.png" alt="" />
            </span>
            <span className="title">
              <h1>{title || "துமி அமையம்" }</h1>
            </span>
          </a>
          <nav>
            <ul>
              <li>
                <a href="#menu">{title || "துமி அமையம்" }</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
