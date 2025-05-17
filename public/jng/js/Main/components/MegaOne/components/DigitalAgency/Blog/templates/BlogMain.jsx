import React from 'react'

const BlogMain = (props) => {

  const {
    sub,
    title1,
    title_bold1,
    title_bold2,
    title3,
  } = props;

  return (
    <>
      <span className={`sub-title`}>
        {sub}
      </span>
      <h2 className={`title mb-0`}>{title1}
        <span className={`alt-color js-rotating`}>
          {title_bold1}
          {title_bold2}
        </span>
        {title3}
      </h2>
    </>
  );
};

export default BlogMain;