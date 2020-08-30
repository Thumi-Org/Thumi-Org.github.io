import React from 'react';

class RecentRelease extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, recentPublication } = this.props;
    const { publicationName, releaseDate, coverImageName, pdfLink, ePaperLink, contentTitles } = recentPublication || {};

    const contentTitleElements = [];
    contentTitles.forEach((element, index) => {
      contentTitleElements.push(<li>{index+1}. {element}</li>);
    });
    return(
      <div className="recentRelease">
        <h2 className="center-align"><b>{title}</b>  | {publicationName} - {releaseDate}</h2>
        <p>
          <span className="image left recentReleaseImage">
            <img src={`images/${coverImageName}`} alt="" />
          </span>
          <div className="">
          <ul className="alt">
            {contentTitleElements}
            <li>
              <a target={pdfLink ? "_blank" : "" } href={pdfLink || "#"} ><input type="submit" value="PDF தரவிறக்கம் செய்ய" className="primary left-right-space" /></a>
              <a target={ePaperLink ? "_blank" : "" } href={ePaperLink || "#"} ><input type="submit" value="பத்திரிகை வடிவில் வாசிக்க" className="secondary left-right-space" /></a>
            </li>
          </ul>
          </div>
        </p>
      </div>
    );
  }
}

export default RecentRelease;
