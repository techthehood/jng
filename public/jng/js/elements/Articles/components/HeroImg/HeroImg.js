// import React from 'react'

const HeroImg = (props) => {
  let {
    hero = {},
  } = props;

  let {
    src = "jng/js/elements/Articles/img/news-1.jpg",
    alt = "image",
  } = hero;

  return (
    <>
      <div className="post-thumbnail">
        <img src={src} alt={alt}/>
      </div>
    </>
  )
}

export default HeroImg