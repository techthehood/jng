import React from 'react'

const BlogContent = (props) => {

  const {
    content
  } = props;

  const content_map = content.map((item, ndx) => { 

    const {
      active,
      date,
      title,
      text,
      img,
      author,
    } = item;

    if(!active) return;

    let blog_author = author.active ? (
      <a className={`author d-flex align-items-center`} href={`${author.link}`}>
        <img alt={`image`} className={`author-img bg-purple`} src={`${author.img}`} />
        <h5 className={`author-name`}>{author.name}</h5>
      </a>
    ) : null;

    return (
      <div className={`col-md-4`} key={`blog_content_${ndx}`}>
        <div className={`news-item`}>
          <img alt={`image`} className={`news-img`} src={`${img}`} />
          <div className={`news-text-box`}>
            <span className={`date main-color`}>{date.value}</span>
            <a href={`agency/blog-list.html`}>
              <h4 className={`news-title`}>{title}</h4>
            </a>
            <p className={`para`}>{text}</p>
            {blog_author}
          </div>
        </div>
      </div>
    );
  });

  return content_map;
}

export default BlogContent