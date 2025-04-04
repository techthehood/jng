# Slider notes
*swiper.js slider component*
[Swiper.js demos](https://swiperjs.com/demos)   

NOTE: IMPORTANT: i think i didn't use Swiper React because it was updated to require the use of es6 modules only or you had to downgrade it to an earlier version that didn't support some of the features.

How do i set the sliders height?

i pasted in this placeholder selector into the class i used as an alias in the Swiper component (passed in through PhotoSwipe component)
```
%Slider {
  .sli_swiper {

    @mixin small {
      width: 90%;
      height: 65vw;
    }

    @include media.mobile {
      @include small;
    }

    @include media.mini {
      @include small;
    }

    @include media.tablet {
      width: 90%;
      // height: 55vw;
      height: 10rem;
    }

    // @include media.laptop{width: 60%;}
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .slide_photo {
    // filter: drop-shadow(20px 4px 6px black);
    filter: drop-shadow(7px 7px 2px #ccc);// better looking drop shadow

    @mixin small {
      width: 80vw;
      height: 45vw;
    }

    @include media.mobile {
      @include small;
    }

    @include media.mini {
      @include small;
    }

    // @include media.tablet{
    //   width: 700px;
    //   height: 400px;
    // }
  }
}// %Slider

```

**Show.scss**
```
.event-photo-slide{
  grid-area: photo;
  .evp-swiper{
    @extend %Slider;
    // height: 5rem;
  }
}
```

**Show.js**
```
  {has_photos ? <PhotoSwipe {...{list: photos, tag: "event-photo-slide", alias: "evp-swiper"}}/> : null}
```

#### How do i put a gap between each image?
```

```

```
    filter: drop-shadow(7px 7px 2px #ccc);
```
#### how do i control the image aspect ratio so they dont deform?
> add object-fit to .slide_photo
```
  .slide_photo {
    filter: drop-shadow(7px 7px 2px #ccc);
    object-fit: scale-down;
    ...
```

#### how do i navigate slides more than one at a time?
> use slidesPerGroup
```
  slidesPerGroup: 3,

  ...

  loop: true,
  loopFillGroupWithBlank: true,
```

#### how do i refresh swiper on resize?


Events > PhotoSwipe.js
```
  let slider_data = {
    alias, 
    ref,
    iUN, 
    loop: true, 
    auto: false, 
    autoHeight: true, 
    navigation,
    pagination,
    slidesPerView, 
    lazy,/*handle_change*/ /*effect: 'cube'*/
    freeMode,
    spaceBetween,
    slidesPerGroup,
    effect,
  } 

  return (
    <div className={`PhotoSwipe ${tag}`}>
      <Slider {...slider_data}>
        {content}
      </Slider>
    </div>
  )
```

Main > Videos.js

```
  let content = use_data.map((entry, ndx) => { 
      return (
        <Slide {...{ndx, iUN}} key={`vid_${iUN}_${ndx}`}>
          <video 
            id={`my-player_${iUN}_${ndx}`}
            className={`slide_video video-js vjs-theme-forest`} /*ref={ref}*/ 
            controls
            // width="640px" 
            // height="264px" 
            // width="700px"
            // height="400px"
            data-ndx={ndx}
            preload="auto"
            poster={entry.poster}
            data-setup='{}'
          >
            <source src={entry.src} type='video/mp4'/>
            {"Your browser does not support the video tag."}
          </video>
          {/* <img src={entry.src} alt="" /> */}
        </Slide>
      )
    })
  <Slider {...{iUN, loop: false, auto: false, autoHeight: true, /*handle_change*/ /*effect: 'cube'*/}}>
    {content}
  </Slider>
```