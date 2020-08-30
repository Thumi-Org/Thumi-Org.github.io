import React from 'react';

class Footer extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    const renderIFrame = () => {
      const iframe = '<iframe id="iFrame1" src="https://docs.google.com/forms/d/e/1FAIpQLSdGgxxqN6LACjDAIn_FlUVTqDBkScBSGxAZIXgn9x_SJCa33A/viewform?hl=ta&embedded=true" height="723" frameborder="0" marginheight="0" marginwidth="0" style="width:100%;border:none;overflow:hidden;">Loading…</iframe>';
      return {
        __html: iframe
      };
    };

    const { socialMediaLinks } = this.props;
    const { twitter, facebook, instagram, mobile, email } = socialMediaLinks || {};

    return(
      <footer id="footer">
        <div className="inner">
          <section id="contact-us">
            <h2>தொடர்புகளுக்கு</h2>
          
          <div dangerouslySetInnerHTML={ renderIFrame() } />
          </section>
          <section>
            <h2>சமூகவலைத்தள இணைப்புகள்</h2>
            <ul className="icons">
              <li><a href={twitter} className="icon brands style2 fa-twitter" target="_new"><span className="label">Twitter</span></a></li>
              <li><a href={facebook} target="_new" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
              <li><a href={instagram} className="icon brands style2 fa-instagram" target="_new"><span className="label">Instagram</span></a></li>
              <li><a href={`call:${mobile}`} className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li>
              <li><a href={`email:${email}`} className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
            </ul>
          </section>
          <ul className="copyright">
            <li>&copy; 2020 - இணைய உரித்துரிமை மற்றும் வடிவமைப்பு</li><li> <a href="#">துமி அமையம்</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
