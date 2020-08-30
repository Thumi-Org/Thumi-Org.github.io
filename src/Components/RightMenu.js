import React from 'react';

class RightMenu extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav id="menu">
        <div className="inner">
						<h2>துமி அமையம்</h2>
						<ul>
							<li><a href="#">முகப்பு</a></li>
							<li><a href="#contact-us">தொடர்புகளுக்கு</a></li>
						</ul>
				</div>
        <a className="close" href="#menu">Close</a>
      </nav>
    );
  }
}

export default RightMenu;
