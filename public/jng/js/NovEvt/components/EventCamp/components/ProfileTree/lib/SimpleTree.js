import React, {useRef, useEffect} from 'react';
import ProfileIcon from '../../ProfileIcon';
import QRBtn from '../../QRCoder/QRBtn';

const SimpleTree = (props) => {

  const { 
    item_data,
    edit = false,
    edit_callback,
    delete_callback,
    icon = "share2",
    outer_nav = true,
    site_class = "",
  } = props;

  const {
    id,
    title,
    description,
    tool = "default",
    link: url,
    image,
    config,
  } = item_data;

  const QRB_ref = useRef();
  const Simp_ref = useRef();

  useEffect(() => {
    if(outer_nav) return;
    Simp_ref.current.addEventListener("click", (e) => {
      e.preventDefault();// GOTCHA: it was triggering twice. this was enough to stop it
      QRB_ref.current.click();
      // e.stopPropagation();
    })
  },[])

  const qr_data = {
    default: {
      title,
      description,
      // btn_title,
      url,
      autorun: true,
    },
  };

  
  let content_els = (
    <>
      {image ? <ProfileIcon {...{ name: "pTLink", no_class: true, image }} /> : null}
      <h5 className="pTree_link_title clamp-1" title={title}>{title}</h5>
      <div className="pTree_link_desc clamp-1" title={description}>{description}</div>
      {url ? <QRBtn {...{ icon: `icon-${icon}`, name: "pTree_QRBtn", data: qr_data, site: url, ref: QRB_ref, site_class}} /> : null}
      {edit ? <div className="pTree_link_icon_cont">
        <div className="pTree_link_icon pTree_link_edit icon-pencil"
          onClick={(e) => {
            e.preventDefault();
            edit_callback({...item_data});
            e.stopPropagation();
          }}
          ></div>
        <div className="pTree_link_icon pTree_link_delete icon-bin"
          onClick={(e) => {
            e.preventDefault();
            delete_callback(id)
            e.stopPropagation();
          }}
          ></div>
      </div> : null}
    </>
  );

  let sr_attribs = {};
  if(!outer_nav) sr_attribs.ref = Simp_ref;
  
  const edit_class = edit ? "edit" : "";
  let lft_cls = image || description ? "left_display" : ""

  let inner = url && outer_nav ? (
    <a href="" className={`pTree_link ${lft_cls} ${edit_class}`} href={url} target="_blank">
      {content_els}
    </a>
  ) : <div className={`pTree_link ${lft_cls} ${edit_class}`} {...sr_attribs}>{content_els}</div>;

  return (
    <li className={`pTree_link_content ${tool} w3-btn w3-card`}>
      {inner}
    </li>
  );
}

export default SimpleTree
