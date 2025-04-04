
# RForm notes

#### RForm html output sample template strings (.pre and .post)

```
  export const html_parts = {
  pre: `
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <style>
    /* @use '../../lib/scss/media'; */
    :root {
    --main-color: #f25421;
    --off-main-color: #f68864;
    --white: #fff;
    --main-color: #7b9c41;
    --off-main-color: #79d36f;
    }
      * {
          box-sizing: border-box;
      }

    .rForm_wrapper {padding: 4rem 2rem 2rem; margin: 2rem; border: 1px solid #ccc;}
    input, textarea{ pointer-events: none;/*appear to disable inputs*/}
    .rHead.ProfileIcon_icon_wrapper, .rawDrop_header, .rForm_submit_cont, .rList_add_cont{display: none !important;}
    .register_view_modal_cont {
      padding-top: 1rem !important; }
      .register_view_modal_cont .register_view_modal {
        margin-top: 1rem !important;
        max-width: 50rem !important; }
        .register_view_modal_cont .register_view_modal .register_view_content {
          min-height: 25rem;
          max-height: 85vh;
          overscroll-behavior: contain; }
          .register_view_modal_cont .register_view_modal .register_view_content * {
            color: #000; }
          .register_view_modal_cont .register_view_modal .register_view_content .snap_ctrls.grid {
            grid-template-columns: auto 5fr 1fr !important; }
          .register_view_modal_cont .register_view_modal .register_view_content .snap_ctrls_main {
            padding: .25rem 0;
            width: 100% !important; }
          .register_view_modal_cont .register_view_modal .register_view_content .snap_core_snap_cont {
            border: unset; }
          .register_view_modal_cont .register_view_modal .register_view_content .reg_icon.hidden {
            display: none; }
          .register_view_modal_cont .register_view_modal .register_view_content .rForm_display_preview_btn {
            position: absolute;
            top: 1.7rem;
            right: 2rem;
            font-size: 1.3rem; }

    .rSelect_wrapper {
      display: flex;
      flex-flow: column nowrap; }
      .rSelect_wrapper .rSelect_inner {
        display: grid;
        grid-template-areas: "contractor ." "agency ." "general ." "applicant .";
        grid-template-columns: 5fr 1fr;
        padding: 0.5rem;
        gap: 1rem;
        flex-flow: column nowrap; }
        .rSelect_wrapper .rSelect_inner .contractor {
          grid-area: contractor; }
        .rSelect_wrapper .rSelect_inner .agency {
          grid-area: agency; }
        .rSelect_wrapper .rSelect_inner .general {
          grid-area: general; }
        .rSelect_wrapper .rSelect_inner .applicant {
          grid-area: applicant; }
        .rSelect_wrapper .rSelect_inner .rSelect_dnld {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          border-radius: .5rem;
          border: 3px solid var(--main-color);
          color: var(--main-color);
          padding: unset;
          text-decoration: none; }
        .rSelect_wrapper .rSelect_inner .sTree_link_content.active {
          background-color: var(--main-color); }
          .rSelect_wrapper .rSelect_inner .sTree_link_content.active .sTree_link_title {
            color: white;
            text-shadow: 2px 2px 2px #323131; }
          .rSelect_wrapper .rSelect_inner .sTree_link_content.active .sTree_link_desc {
            color: #ccc; }

    .rHead.ProfileIcon_icon_wrapper {
      display: flex;
      justify-content: center;
      align-items: center; }
      .rHead.ProfileIcon_icon_wrapper .rHead_icon_img_image_area {
        width: 12rem;
        height: 7rem; }
        .rHead.ProfileIcon_icon_wrapper .rHead_icon_img_image_area img {
          width: 100%;
          height: 100%;
          object-fit: contain; }

    .rHead_title {
      text-align: center;
      text-shadow: 2px 2px 2px #ccc;
      text-transform: uppercase;
      margin-bottom: 2rem; }

    .rForm .rHead_icon_img_image_area {
      width: 8rem !important;
      height: 4rem !important; }
    .rForm .rHead_title {
      font-size: 1rem;
      margin-bottom: 1rem; }
    .rForm .rInfo_info_menu {
      padding: 0 4rem 1rem; }
    .rForm .rForm_active, .rForm .rForm_option {
      border-radius: 7px;
      border: 3px solid var(--main-color);
      margin: 0 2.5rem 1rem;
      font-weight: 600;
      padding: .25rem;
      text-transform: uppercase;
      text-align: center; }
    .rForm fieldset {
      padding: 0 .5rem; }
    .rForm .w3-row fieldset:only-child {
      width: 100% !important; }
    .rForm .rForm_form label {
      text-transform: capitalize; }
    .rForm .rForm_mask {
      text-align: center;
      font-weight: bold;
      padding-bottom: 0.5rem; }
    .rForm .rForm_submit_cont {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 1rem;
      border-top: 1px solid #ccc;
      position: sticky;
      bottom: 0; }
      .rForm .rForm_submit_cont .rForm_submit {
        background: var(--main-color);
        color: var(--white);
        width: 80%;
        border-radius: 1rem; }

    .register-profile-icon {
      display: none !important; }

    .rInfo_wrapper {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem; }
      .rInfo_wrapper .rInfo_details {
        font-size: .8rem;
        margin-bottom: 1rem; }

    .rOpp_wrapper {
      padding: 1rem; }
      .rOpp_wrapper .rForm_option {
        text-transform: capitalize !important; }
      .rOpp_wrapper .rOpp_add_cont {
        display: flex;
        justify-content: flex-end; }
        .rOpp_wrapper .rOpp_add_cont .rOpp_add {
          display: flex;
          justify-content: space-evenly;
          width: auto;
          gap: .5rem;
          padding: .5rem 2rem;
          background: #ccc;
          border-radius: 1rem; }
      .rOpp_wrapper .rOpp_delete {
        font-size: 1.5rem;
        cursor: pointer; }

    .rRes_wrapper {
      padding: 1rem; }
      .rRes_wrapper .rRes_option {
        text-transform: capitalize; }
      .rRes_wrapper .rRes_sub {
        font-size: .9rem; }

    .rRes_cont {
      display: flex;
      flex-flow: row wrap; }
      .rRes_cont .res_check, .rRes_cont .edu_check, .rRes_cont .gen_check {
        flex: 0 33%; }
        .rRes_cont .res_check .form-group, .rRes_cont .edu_check .form-group, .rRes_cont .gen_check .form-group {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 0.5rem; }
          .rRes_cont .res_check .form-group input, .rRes_cont .edu_check .form-group input, .rRes_cont .gen_check .form-group input {
            width: 1.5rem;
            box-shadow: unset; }
          .rRes_cont .res_check .form-group label, .rRes_cont .edu_check .form-group label, .rRes_cont .gen_check .form-group label {
            font-weight: 400;
            font-size: .9rem;
            margin: unset; }
      .rRes_cont .res_txt label, .rRes_cont .edu_txt label, .rRes_cont .gen_txt label {
        margin: 0.75rem 0 0.25rem;
        font-weight: 500;
        font-size: .9rem; }

    /*# sourceMappingURL=Register.css.map */

      </style>
    </head>
    <body>`,
    post: `
          </body>
      </html>
    `
}
``` 