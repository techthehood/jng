import React from 'react'
import BlogContent from './BlogContent'
import MainHtml from './BlogMain'

const BlogHtml = (props) => {

  const {
    main,
    content,
  } = props;

  return (
    <section className="Blog" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="heading-area mx-570 pb-lg-5 mb-5">
              <MainHtml {...main} />
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp">
          <BlogContent {...{content}} />
        </div>
      </div>
    </section>
  )
}

export default BlogHtml