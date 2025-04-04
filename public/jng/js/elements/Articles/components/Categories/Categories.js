// import React from 'react'

const Categories = (props) => {
  let {
    categories
  } = props;

  let display_els = categories.map((entry) => { 
    return <a href={entry.href} rel="category tag">{entry.title}</a>
  });

  return categories.length > 0 ? (
    <span className="post-categories">
      {display_els}
    </span>
  ) : null;
}

export default Categories