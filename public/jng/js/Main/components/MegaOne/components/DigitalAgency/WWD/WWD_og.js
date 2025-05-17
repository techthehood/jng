import React from 'react'
import Articles from '../../../../../../elements/Articles';
import './WWD.scss';

const WWD = ({
  data,
}) => {

  const {
    title,
    sub2,
    sub3,
    sections,
    card = false,
  } = data;

  let section_display = sections.map((entry) => { 
    return entry.active ? <Articles {...{...entry}}/> : null;
  });

  let card_cont = card ? "card-container" : "";
  let card_cls = card ? "w3-card" : "";

  return (
    <div className={`WWD wwd ${card_cont}`}>
      <div className={`container ${card_cls}`}>
        <h1 className="title">
          {<span className="sub">{title}</span>}
          {sub2 ? <span className="sub2">{sub2}</span> : null}
          {sub3 ? <span className="sub3">{sub3}</span> : null}
        </h1>
        {section_display}
      </div>
    </div>
  );
};

export default WWD;