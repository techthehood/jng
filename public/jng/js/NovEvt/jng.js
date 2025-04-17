import { CDN_PATH } from '../paths/'
export const date = "Friday, November 19, 2021 11:00:00";

const menu_array = [{ title: "Speakers", href: "Speakers" }, { title: "Schedule", href: "conference" }, { title: "About", href: "about" }, { title:"Partners", href:"Partners"}, { title:"Testimonial", href:"Testimonial"}, { title:"Contacts", href:"Contacts"}];
const social = {
  INSTAGRAM: { title: "instagram", url: "https://www.instagram.com/jobsnotgunsdc/"},
  FACEBOOK: {title: "facebook", url: "https://www.facebook.com/people/JobsNot-Guns-DC/100075073862586/"},
  TWITTER: {title: "twitter", url: "https://twitter.com/jobsnotguns"},
  LINKEDIN: { title: "linkedin", url: "" },
}

const ec_use_path = typeof FILE_SRC == "undefined" || FILE_SRC == "cdn" ? `${CDN_PATH}/` : "";

export const landing_data = {
  hero: {
    // title_bold: "Jobs",
    // title: "Not Guns",
    // sub: "East of the River Recruitment Fair",
    image: `${ec_use_path}jng/EventCamp/images/jobsnotguns.png`,
    title_bold: "East of the River ",
    title: "Recruitment Fair",
    day: "19",
    date_short: "nov",
    date_long: "ember",
    city_short: "wash",
    city_long: "ington",
    city: "d.c.",
    desc1: "Providing employment and training opportunities for district residents to ",
    desc_orange: "reduce gun violence incidents ",
    desc3: "in the District of Columbia.",
    button: "Register Now ",
    menu: menu_array,
    social: social,
  },
  countdown: {
    // NOTE: make countdown data pull from json file
    title1: "East of the River",
    title2: "Recruitment Fair",
    description: "In accordance to DC Law,",
    desc_bold: "MASK ARE REQUIRED",
    desc_end: " at this event!",
    button: "Speakers",
    address1: "location: ",
    address2: "Entertainment and Sports Arena ",
    address3: "1100 Oak Drive, SE. Washington, D.C. 20020"
  },
  about: {
    title: "About ",
    title1: "Jobs ",
    title2: "Not Guns",
    subtitle1: "What is Jobs Not Guns?",
    description: "The DC Business Gun Violence Prevention Coalition comprised of Inner Thoughts, Inc., the National Association of Minority Contractors—Washington, DC Metropolitan Area Chapter (NAMC-WMAC) and DC Concerned Black Business Owners hosts the Jobs Not Guns Initiative.  Established to represent the business community in the District of Columbia to assist Mayor Bowser’s initiative “Building Blocks DC, Gun Violence Prevention Emergency Operations Center” designed to decrease gun violence in the District of Columbia.  The Coalition is committed to supporting Ms. Linda Harllee-Harper, Director of the (GVP-EOC) to successfully carry out the mission, purpose and scope of GVP-EOC.",
    subtitle2: "East of the River Recruitment Fair",
    description2: "“JOBS NOT GUNS” is an initiative designed to assist Building Blocks DC in CREATING JOBS!   The “Jobs Not Guns Recruitment Fairs” are held to bring businesses, training programs and support service agencies, working in the District, together to provide employment, training and support services information to District residents that builds a strong District workforce that is job-ready and will lead to a systematic decrease in the number of perpetrators and victims of gun violence in the Nation’s Capital.",
  },
  partners: {
    title_bold: "Our",
    title: "Partners",
    button: "News Feed",
  list: [
      { img: `${ec_use_path}jng/EventCamp/images/partners/stars.png` },
      { img: `${ec_use_path}jng/EventCamp/images/partners/building-blocks.svg` },
      { img: `${ec_use_path}jng/EventCamp/images/partners/events-DC.svg` },
      { img: `${ec_use_path}jng/EventCamp/images/partners/DC-does.svg` },
      { img: `${ec_use_path}jng/EventCamp/images/partners/DFHV.svg` },
      { img: `${ec_use_path}jng/EventCamp/images/partners/CSOSA.png` },
      { img: `${ec_use_path}jng/EventCamp/images/partners/MPD2.png` },
      { img: `${ec_use_path}jng/EventCamp/images/partners/ACC.png` },
      { img: `${ec_use_path}jng/EventCamp/images/partners/pepco.svg` },
      { img: `${ec_use_path}jng/EventCamp/images/partners/DC-seal2.png` },
      // { img: "jng/EventCamp/images/partners/2.png" },
    // { img: "jng/EventCamp/images/sponsors/creative-graphic-unique2.png" },
    // { img: "jng/EventCamp/images/sponsors/graphic-design-genuine2.png" },
    // { img: "jng/EventCamp/images/sponsors/creative-special2.png" },
    // { img: "jng/EventCamp/images/sponsors/creative-design-unique2.png" },
    // { img: "jng/EventCamp/images/sponsors/creative-graphic2.png" },
    // { img: "jng/EventCamp/images/sponsors/premium2.png" },
  ]},
  testimony:{
    comments: [
      {
        name:"Linda Harllee-Harper:",
        role:"",
        comment: "Hurt people, hurt people!  We need to instill hope in our hopeless residents; employment helps them to become self sufficient"
      },
      {
        name: "Chief Contee:",
        role:"",
        comment: "What are each of us doing to ensure we don't have gun violence in our city?  People need to show up and take advantage of these types of employment opportunities."
      },
      {
        name: "Attendee #1:",
        role:"",
        comment: "People my age don't have nothing to do with their time so they need help to find a job."
      },
      {
        name: "Attendee #2:",
        role:"",
        comment: "This shows that you can find a job if you want it,  how hard do you want to find a job?"
      },
    ]
  },// testimony
  contact:{
    title1: "Event Location",
    sub1: "Entertainment and Sports Arena",
    address1: "1100 Oak Drive, SE",
    zip1: "Washington D.C.",
    title2: "Contact Us",
    sub2: "NAMC-WMAC",
    address2: "2307 Skyland Place, SE – Suite A",
    zip2: "Washington, D.C. 20020",
    phone: "202-678-8840",
    email: "info@namcdc.org",
    button: "Register for the event"
  },// contact
  footer:{
    title1: "Jobs ",
    title2: "Not Guns",
    menu: menu_array,
    year: "2021",
    copy: "Developer ",
    url: "https://sunzao.us/brand/business/",
    creator: "BusinessTech by sunzao",
    social: social,
  },
}// landing_data

export const form_types = {
  CONTRACTOR: "contractor",
  AGENCY: "agency",
  GENERAL: "general",
  APPLICANT: "applicant",
};

export const form_info = {
  info: {
    image: `${ec_use_path}jng/EventCamp/images/jobsnotguns.png`,
    title: "East Of The River Recruitment Fair",
    sub: "(please select and submit only one form)",
    date: "Friday, November 19, 2021",
    location: "Entertainment and Sports Arena",
    address: "1100 Oak Drive, SE",
    City: "Washington, DC 20032",
    details: "(on the grounds of St. Elizabeths East Campus)",
    time: "11:00 a.m. until 3:00 p.m.",
    notice: "In accordance to DC Law, MASK ARE REQUIRED at this event!"
  },
  start:{
    timer: 5,
    interval: 5,
    intro_text: "There is a 2 step process to registering for the Jobs Not Guns East of the River Recruitment Fair.",
    success_text: "You have successfully submitted your form.  Continue with step 2.",
    fail_text: "An error occured with your form submission. You may want to try resubmitting it.",
    step1:{
      title: "Step 1",
      icon: "profile",
      text: "Register for the event.",
    },
    step2:{
      title: "Step 2",
      icon: "barcode",
      text: "Get your ticket.",
    },
    button:{
      text: "Lets get Started.",
      text2: "lets get the tickets.",
      url: "https://www.universe.com/events/jobs-not-guns-east-of-the-river-recruitment-fair-tickets-FGJ3SN",
      count_text: "you will be redirected in",
      otherwise: "if you aren't redirected when the timer ends click the button to get your tickets to the event."
    }
    // The first is sharing contribution to this event by way of offering a service or sharing your personal time and effort to upgrade your lifestyle or career
  },
  pages:{
    FSTART: "start page",
    FSELECT: "selection page",
    FFORM: "form page",
    FFAIL: "fail page",
    FSUCCESS: "success page"
  },
  select: {
    shared: ["name","address","suite","city", "state", "telephone", "email", "zip"],
    contractor: {
      form: form_types.CONTRACTOR,
      title: "Business Contractor Exhibitor",
      pdf: "JNGRF-EXHIBITOR-BUSINESS-AND-CONTRACTOR-FORM-10-21-21.pdf",
      info: ["title","company", "fax", "type"],
      custom: ["opportunities"]
    },
    agency: {
      form: form_types.AGENCY,
      title: "Agency and Training Exhibitor",
      pdf: "JNGRF-EXHIBITOR-FORM-AGENCY-AND-TRAINING-PROGRAMS-10-21-21 .pdf",
      info: ["title", "company", "fax", "type"],
      custom: ["resources"]
    },
    general: {
      form: form_types.GENERAL,
      title: "General Admission Registration",
      pdf: "JNGRF-GENERAL-ADMISSION-10-21-21.pdf",
      info: ["mobile", "ward"],
      custom: ["general"]
    },
    applicant: {
      form: form_types.APPLICANT,
      title: "Job Applicant Registration",
      pdf: "JNGRF-JOB-APPLICANT-REGISTRATION-FORM-10-21-21.pdf",
      info: ["mobile", "ward"],
      custom: ["experience","education"]
    }
  },//select
  form:{
    name:{
      attrib: {
        name:"name",
        type:"text",
        id:"name",
        label:"Name",
        placeholder:"Enter your name...",
      },
      variant:"w3-col m8"
    },
    title:{
      attrib: {
        name:"title",
        type:"text",
        id:"title",
        label:"Title",
        placeholder:"Enter title or position...",
      },
      variant: "w3-col m4"
    },
    list:{
      type: {
        attrib: {
          name: "type",
          type: "text",
          placeholder: "opportunity type",
        },
        variant: "w3-col m5"
      },
      description: {
        attrib: {
          name: "description",
          type: "text",
          placeholder: "describe the opportunity...",
        },
        variant: "w3-col m6 s11"
      },
    },
    check:{
      
    }
  }// form
}

export const mail_styles = {
  wrap_style: { padding: ".25rem" },
  label_style: { display: "inline-block", paddingBottom: "0.25rem" },
  input_style: {
    border: "1px solid #ccc", border: "1px solid #ccc", padding: "0.5rem 1rem", borderRadius: "0.5rem",
    height: ".75rem"
  }
}

export const agency_items = [
  "GED", "Resume Writing", "EFL",
  "Wellness Services", "Basic Needs", "Financial Assistance",
  "Workforce Development", "Housing Counseling", "Medical Counseling",
  "Self-Sufficiency Services", "Pre-Apprenticeship Training", "Apprenticeship Training"
];
export const agency_items2 = [
  ["GED", "Resume Writing", "EFL"],
  ["Wellness Services", "Basic Needs", "Financial Assistance"],
  ["Workforce Development", "Housing Counseling", "Medical Counseling"],
  ["Self-Sufficiency Services", "Pre-Apprenticeship Training", "Apprenticeship Training"]
];

export const edu_items = [
  "High School Graduate", "GED Certificate", "Some College", "College Graduate", "Trade School"
];
export const edu_items2 = [
  ["High School Graduate", "GED Certificate", "Some College"], ["College Graduate", "Trade School"]
];

export const gen_items = [
  "Job(Type)", "Training", "Support Services"
];
export const gen_items2 = [
  ["Job(Type)", "Training", "Support Services"]
];

const xhtml_header = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>

    <style type="text/css">
`;

const html_header = `
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <style>
`

export const html_parts = {
  pre: `
  ${xhtml_header}
    /* @use "../../scss/media"; */
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