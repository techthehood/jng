import { Suspense, useState, useEffect } from 'react';
import MainMenu from '../MainMenu';
import Four04 from '../Four04';

import { SOME_CONST } from './paths';

import htmlContent from './Articles.hbs';

// import './style.css';
import './agency.css';// NOTE: also controls loader - needs to run as early as possible
// import './Articles.scss';// see ArticleDefer
import Loader from './Loader';
import DelayDefer from '../DeferMe/DelayDefer';
import Head from './components/Head/Head';
import Banner from './components/Banner';
import HeroImg from './components/HeroImg';
import {article_data} from './data';
import { exists } from '../../tools/exists';
import Categories from './components/Categories/Categories';
import Author from './components/Author/Author';

const Articles = (props) => {

  let {
    temp_key = "sample_article",
    // temp_key = "our_process",
  } = props;

  let alias = props?.match?.params?.article;
  alias = alias.toLowerCase();
  
  const h_cont = htmlContent(data);

  let display;

  // idk why i need url prop
  const [data, setData] = useState({url:"jng/"});
  const [ready, setReady] = useState(false);


  useEffect(() => {
    
    getData();
    return () => {
      
    }
  }, [])
  

  const getData = async () => { 
    // db fn to get data from an api
    debugger
    // temporarily get data from a file
    setData(article_data[temp_key]);
    setReady(true);
  }

  switch (alias) {
    case SOME_CONST:
      
        display = (
          <>
            <Loader />
            {/* <Suspense fallback={<div className="loader_modal w3-modal active"><div className="loader">Loading...</div></div>} > */}
              <DelayDefer filename="ArticleDefer" />
            {/* </Suspense> */}
            {/* <div dangerouslySetInnerHTML={{ __html: h_cont }} /> */}
            
            {/*<!-- Preloader -->*/}
            <div className="preloader">
              <div className="box"></div>
            </div>

            {/*<!-- Ink Transition -->*/}
            <div className="cd-transition-layer visible opening">
              <div className="bg-layer"></div>
            </div>
            {/*<!--/Preloader -->*/}

            
            {/* <Head/> */}
            {/* <Banner /> */}

            {/*<!--Blog Start-->*/}
            <section className="blog-single">
              <h2 className="d-none">hidden</h2>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    {/*<!--Post-->*/}
                    <article className="blog-classic">
                      {/*<!--Thumbnail-->*/}
                      {/* NOTE: empty hero obj are accepted - creates a placeholder img */}
                      {exists(data?.hero) ? <HeroImg {...data} /> : null}
                      {/*<!--Post Meta-->*/}
                      <div className="post-details alt-font">

                        {exists(data?.categories) && Array.isArray(data?.categories) ? (
                          <Categories {...data} />
                        ) : null}

                        {exists(data?.author) ? <Author type="byline" {...data} /> : null}

                      </div>

                      <h2 className="post-title"><a href="#" rel="bookmark">Minimal Post With A Preview Image</a></h2>

                      <div className="post-content">

                        <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s lorem Ipsum
                          is simply dummy text of the printing.<br/><br/>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec facilisis nullano volutpat justo. Nulla
                          tempus ultricies feugiat. Duis magna risus, luctus id urna dapibus condimentum dui. Maecenas tempor non ex
                          eu vehicula. Sed sit placerat velit,
                        </p>

                        <blockquote className="block-quote">
                          <p> You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s
                            nobody listening, and live like it’s heaven on earth.</p><cite> William W. Purkey </cite>
                        </blockquote>

                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s lorem Ipsum
                          is simply dummy text.<br/><br/>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec facilisis nullano volutpat justo. Nulla
                          tempus ultricies feugiat. Duis magna risus, luctus id urna dapibus condimentum dui. Maecenas tempor non ex
                          eu vehicula. Sed sit placerat velit,
                        </p>

                      </div>

                      <div className="footer-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="post-tags">
                              <span className="post_meta_item post_tags"><a href="#" rel="tag">Image</a>
                                <a href="#" rel="tag">Project</a>
                                <a href="#" rel="tag">Studio</a>
                              </span>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="post-social social-icon-bg">
                              <ul className="share-icons">
                                <li><a className="facebook" target="_blank" href="#"
                                    title="Minimal Post With A Preview Image"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a className="twitter" target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li><a className="pinterest" target="_blank" href="#"><i
                                      className="fab fa-pinterest-p"></i></a></li>
                              </ul>
                            </div>
                          </div>


                        </div>
                      </div>

                    </article>

                    {/*<!--Post Navigation-->*/}
                    <div className="post-navigation alt-font">
                      <div className="row d-flex align-items-center">

                        <div className="col-6">
                          <div className="post-previous">
                            <a href="#" className="single-post-nav left d-flex align-items-center">
                              <i className="fa fa-angle-left"></i>
                              <div className="post-nav-content">
                                <p>Previous Post</p>
                                <h6>Standard Post With A Image Gallery</h6>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="post-next">
                            <a href="#" className="single-post-nav right d-flex align-items-center">
                              <div className="post-nav-content">
                                <p>Next Post</p>
                                <h6>Minimal Post With A Preview Image</h6>
                              </div>
                              <i className="fa fa-angle-right"></i>
                            </a>

                          </div>
                        </div>

                      </div>
                    </div>

                    {/*<!--Author-->*/}
                    <div className="agency-author">
                      <div className="author-avatar">
                        <img alt="image" src="jng/js/elements/Articles/img/author.jpg" className="avatar"/>
                      </div>
                      <div className="author-content">
                        <span className="text-small">Written By</span>
                        <h6><a href="#">Mark Anderson</a></h6>
                        <div className="author-description">
                          <p>Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi
                            semper non.</p>
                        </div>
                      </div>
                    </div>

                    {/*<!--Comment Area-->*/}
                    <div className="comments-area blog-comment" id="comments">
                      <div className="comment-form-title alt-font">
                        <span className="text-outside-line-full">Write a comment </span>
                      </div>
                      <form action="/" method="post" id="commentform" className="comment-form blog-comment-form" noValidate="">
                        <div className="row">
                          <div className="col-lg-4">
                            <input id="author" placeholder="Name *" className="input-field comment-fields" name="author" type="text"
                              defaultValue=""/>
                          </div>
                          <div className="col-lg-4">
                            <input id="email" placeholder="Email *" className="input-field comment-fields" name="email" type="email"
                              defaultValue=""/>
                          </div>
                          <div className="col-lg-4">
                            <input id="url" placeholder="Website" className="input-field medium-input comment-fields" name="url"
                              type="url" defaultValue=""/>
                          </div>
                          <div className="col-md-12">
                            <textarea id="comment" placeholder="Enter your comment here..." rows="8"
                              className="input-field comment-fields" name="comment" required="required"></textarea>
                            <a href="#" id="submit_btn"
                              className="btn btn-large btn-rounded btn-purple btn-hvr-blue d-block">Send Message
                              <div className="btn-hvr-setting">
                                <ul className="btn-hvr-setting-inner">
                                  <li className="btn-hvr-effect"></li>
                                  <li className="btn-hvr-effect"></li>
                                  <li className="btn-hvr-effect"></li>
                                  <li className="btn-hvr-effect"></li>
                                </ul>
                              </div>
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>

                  </div>

                  <div className="col-lg-4">

                    <div className="agency-widget" id="secondary" role="complementary">

                      {/*<!--Search Form-->*/}
                      <aside className="widget widget_search">
                        <form method="get" id="searchform" role="search">
                          {/*form action="javascript:void(0);"  */}
                          <label className="sr-only" htmlFor="s">Search</label>
                          <div className="input-group">
                            <input className="field form-control" id="s" name="s" type="text" placeholder="Search …" defaultValue=""/>
                            <span className="input-group-append">
                              <button className="submit btn-search" id="searchsubmit" name="submit" type="submit"><i
                                  className="fas fa-search"></i></button>
                            </span>
                          </div>
                        </form>
                      </aside>

                      {/*<!--Categories-->*/}
                      <aside className="widget widget_categories">
                        <h3 className="widget-title">Topics</h3>
                        <ul>
                          <li className="cat-item"><a href="#">Art</a> <span className="dots"></span><span
                              className="counts">5</span></li>
                          <li className="cat-item"><a href="#">Fashion</a> <span className="dots"></span><span
                              className="counts">4</span></li>
                          <li className="cat-item"><a href="#">Lifestyle</a> <span className="dots"></span><span
                              className="counts">2</span></li>
                          <li className="cat-item"><a href="#">Motivation</a> <span className="dots"></span><span
                              className="counts">5</span></li>
                          <li className="cat-item"><a href="#">Travel</a> <span className="dots"></span><span
                              className="counts">7</span></li>
                        </ul>
                      </aside>

                      <aside className="widget latest_post_widget">
                        <h3 className="widget-title">Popular Post</h3>
                        <ul className="blog-latest-post">
                          {/*<!--Recent Post-->*/}
                          <li>
                            <figure><a href="#">
                                <img width="150" height="150" src="jng/js/elements/Articles/img/news-1-150x150.jpg" className="attachment-thumbnail" alt="image"/>
                              </a></figure>
                            <div className="post-head"><a className="title" href="#">Minimal Post With A Preview
                                Image</a><span className="clearfix"></span>July 24, 2020 | by <a href="#">Mark
                                Anderson</a></div>
                          </li>
                          {/*<!--Recent Post-->*/}
                          <li>
                            <figure><a href="#">
                                <img width="150" height="150" src="jng/js/elements/Articles/img/news-1-150x150.jpg" className="attachment-thumbnail" alt="image"/>
                              </a></figure>
                            <div className="post-head"><a className="title" href="#">Minimal Post With A Preview
                                Image</a><span className="clearfix"></span>July 24, 2020 | by <a href="#">Mark
                                Anderson</a></div>
                          </li>
                          {/*<!--Recent Post-->*/}
                          <li>
                            <figure><a href="#">
                                <img width="150" height="150" src="jng/js/elements/Articles/img/news-1-150x150.jpg" className="attachment-thumbnail" alt="image"/>
                              </a></figure>
                            <div className="post-head"><a className="title" href="#">Minimal Post With A Preview
                                Image</a><span className="clearfix"></span>July 24, 2020 | by <a href="#">Mark
                                Anderson</a></div>
                          </li>
                        </ul>
                      </aside>

                      <aside id="archives-2" className="widget widget_archive">
                        <h3 className="widget-title">Archives</h3>
                        <ul>
                          <li><a href="#">July 2020</a>&nbsp;<span className="dots"></span><span
                              className="counts">2</span></li>
                          <li><a href="#">May 2020</a>&nbsp;<span className="dots"></span><span
                              className="counts">1</span></li>
                          <li><a href="#">June 2018</a>&nbsp;<span className="dots"></span><span
                              className="counts">3</span></li>
                          <li><a href="#">March 2017</a>&nbsp;<span className="dots"></span><span
                              className="counts">3</span></li>
                          <li><a href="#">May 2016</a>&nbsp;<span className="dots"></span><span
                              className="counts">4</span></li>
                          <li><a href="#">August 2015</a>&nbsp;<span className="dots"></span><span
                              className="counts">2</span></li>
                        </ul>
                      </aside>
                      <aside className="widget widget_media_image">
                        <a href="#">
                          <img src="jng/js/elements/Articles/img/advertisment.jpg" className="add-image" alt="image"/>
                        </a>
                      </aside>
                    </div>{/*<!-- #secondary -->*/}
                  </div>
                </div>
              </div>
            </section>
            {/*<!--Blog End-->*/}

            {/*<!--Footer Start-->*/}
            <footer className="footer-style-1 bg-light">
              <div className="container">
                <div className="row align-items-center">
                  {/*<!--Social-->*/}
                  <div className="col-md-6">
                    <div className="footer-social">
                      <ul className="list-unstyled">
                        <li><a className="wow fadeInUp" href="#"><i className="fab fa-facebook-f"
                              aria-hidden="true"></i></a></li>
                        <li><a className="wow fadeInDown" href="#"><i className="fab fa-twitter"
                              aria-hidden="true"></i></a></li>
                        <li><a className="wow fadeInUp" href="#"><i className="fab fa-google-plus-g"
                              aria-hidden="true"></i></a></li>
                        <li><a className="wow fadeInDown" href="#"><i className="fab fa-linkedin-in"
                              aria-hidden="true"></i></a></li>
                        <li><a className="wow fadeInUp" href="#"><i className="fab fa-instagram"
                              aria-hidden="true"></i></a></li>
                        <li><a className="wow fadeInDown" href="#"><i className="fab fa-pinterest-p"
                              aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  {/*<!--Text-->*/}
                  <div className="col-md-6 text-md-right">
                    <p className="company-about fadeIn">© 2020 MegaOne. Made With Love By <a
                        href="#">Themesindustry</a></p>
                  </div>
                </div>
              </div>
            </footer>
            {/*<!--Footer End-->*/}

            {/*<!--Animated Cursor-->*/}
            <div id="aimated-cursor">
              <div id="cursor">
                <div id="cursor-loader"></div>
              </div>
            </div>
            {/*<!--Animated Cursor End-->*/}

            {/*<!--Top Start-->*/}
            <span className="scroll-top-arrow"><i className="fas fa-angle-up"></i></span>
            {/*<!--Top End-->*/}
          </>
        );
      break;
  
    default:
      display = (<><Four04 /></>);
      break;
  }// switch

  return display;
  
}// Articles

export default Articles

/** 
 * {
  title,
  alias,
  text,
  }
  *
*/
