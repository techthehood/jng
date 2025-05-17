import React from 'react';

import ErrorBoundary from '../Error';
import Modal from '../../../../../elements/Modal';
import ProfileTree from '../ProfileTree';
const {bio_links} = require("./Bio.data");
require("./Biolist.scss");

const Biolist = () => {

  let modal_data = {
    name: "biolist_view",
    tag: "",
    // hasWrapper: true,
    wrapper: {
      // style:{
      //   zIndex: modal_z
      // },
      addClass: "some-class hide-scroll",
    },
    modal: {
      addClass: "UserCard",
    },
    content: {
      addClass: "hide-scroll",
    },
    close: {
      show: true,
      // callback: close_panel
    },
  }// modal_data

  let use_links = {
    ids: [],
    data: {},
  };

  use_links = bio_links;

  let profile_data = { 
    name: `bio_links`, 
    data: use_links, 
    ext: true, 
    header: true, 
    simple_attribs: {icon: "info", outer_nav: false, site_class: "w3-btn"},
    image: "jng/lib/images/jobsnotguns.png",
    username: "Our Partners",
    profile_attribs: {no_class: true},
    HTag: "h3",
  }

  return (
    <ErrorBoundary>
      <Modal data={modal_data} >
        <ProfileTree {...profile_data} />
      </Modal>
    </ErrorBoundary>
  );

}// Biolist

export default Biolist
