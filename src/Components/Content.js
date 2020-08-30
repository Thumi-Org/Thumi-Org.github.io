/* eslint-disable react/prop-types */
import React from 'react';
import RecentRelease from './RecentRelease';

class Content extends React.PureComponent {

  constructor(props) {
    super(props);

    this.prepareSection = this.prepareSection.bind(this);
  }

  prepareSection() {
    const { publications } = this.props;
    const publicationKeys = Object.keys(publications).reverse();

    const element = []
    publicationKeys.forEach(key => {
      const { publicationName, releaseDate, coverImageName, pdfLink, ePaperLink } = publications[key];
      const styleId = key % 7;
      element.push(
        <article className={`style${styleId}`}>
          <span className="image">
            <img src={`images/${coverImageName}`} alt={publicationName || "துமி இதழ்"} />
          </span>
          <a href="#" target="_new">
            <div className="content">
              <h2>{publicationName || "துமி இதழ்"}</h2>
              <p>{releaseDate}</p>
              <a target={pdfLink ? "_blank" : "" } href={pdfLink || "#"} ><input type="submit" value="PDF தரவிறக்கம் செய்ய" className="primary" /></a>
              <a target={ePaperLink ? "_blank" : "" } href={ePaperLink || "#"} ><input type="submit" value="பத்திரிகை வடிவில் வாசிக்க" className="secondary" /></a>
            </div>
          </a>
        </article>
      );
    });
    return element;
  }

  render() {
    const { meta, recentPublication } = this.props;
    const { subTitle, publicationTitle, recentRelease } = meta || {};
    return(
      <div id="main">
        <div className="inner">
          <header>
            <div className="sub-title">{subTitle}</div>
          </header>
          {recentPublication && <RecentRelease title={recentRelease} recentPublication={recentPublication} />}
          <header>
            <h2>{publicationTitle}</h2>
          </header>
          <section className="tiles">

            {this.prepareSection()}

          </section>
        </div>
      </div>
    );
  }
}

export default Content;
