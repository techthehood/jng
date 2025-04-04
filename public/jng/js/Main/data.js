import { event_images, july21, nov21, july22 } from "./event_images";
import { client_list } from "./client_list";

export const date = "Friday, November 19, 2021 11:00:00";

// https://megaone.acrothemes.com/index-digital-agency.html

const menu_array = [{ title: "Speakers", href: "Speakers" }, { title: "Schedule", href: "conference" }, { title: "About", href: "about" }, { title:"Partners", href:"Partners"}, { title:"Testimonial", href:"Testimonial"}, { title:"Contacts", href:"Contacts"}];
const social = {
  INSTAGRAM: { title: "instagram", url: "https://www.instagram.com/jobsnotgunsdc/"},
  FACEBOOK: {title: "facebook", url: "https://www.facebook.com/people/JobsNot-Guns-DC/100075073862586/"},
  TWITTER: {title: "twitter", url: "https://twitter.com/jobsnotguns"},
  LINKEDIN: { title: "linkedin", url: "" },
}

const social_icons = [
  { link: "facebook-text-hvr", font_icon: "fab fa-facebook-f", href: "https://www.facebook.com/people/JobsNot-Guns-DC/100075073862586/" },
  { link: "twitter-text-hvr", font_icon: "fab fa-twitter", href: "https://twitter.com/jobsnotguns" },
  { link: "linkedin-text-hvr", font_icon: "fab fa-linkedin-in", href: "javascript:void(0);" },
  { link: "instagrams-text-hvr", font_icon: "lni lni-instagram-filled", href: "https://www.instagram.com/jobsnotgunsdc/" },
];

export const main_data = {
  head:{
    social_icons: social_icons,
    menu:[
      {label:"HOME", href:"#home", cls:"fadeInUp", act:"active"},
      {label:"WHO WE ARE", href:"#WhoWeAre", cls:"fadeInDown", act:""},
      {label:"WHAT WE DO", href:"#WhatWeDo", cls:"fadeInUp", act:""},
      { label: "CREATIVE TEAM", href:"#team-section", cls:"fadeInDown", act:""},
      { 
        // there is dropdown menu capability
        label: "EVENTS", href:`${location.origin}/events`, cls:"", act:"", dropdown: true,
        list:[
          { label: "All Events", href: `${location.origin}/events`, cls: "fadeInUp", act: "", target: "_self",},
          { label: "Next", href: `#lastest-blog`, cls: "fadeInUp", act: "",},
          { label: "July 2022", href: "#company-portfolio-section", cls: "fadeInUp", act: "",},
          { label: "Fall 2021", href: `${location.origin}/events/november-2021/`, cls: "fadeInUp", act: "", target: "_blank",},
          { label: "July 2021", href: "#", cls: "fadeInUp", act: "",},
        ]
      },
      {label:"CONTACT", href:"#contact-sec", cls:"fadeInDown", act:"",},
    ],
    images:{
      logo1:"jng/EventCamp/images/jobsnotguns.png",// "jng/MegaOne/digital-agency/img/logo-white.png",
      logo2:"jng/EventCamp/images/jobsnotguns.png",// "jng/MegaOne/digital-agency/img/logo-yellow.png",
    },
    urls:{
      home: `${location.origin}`,
    }
  },
  banner: [
    {
      active: true,
      template:"Hero",
      tag:"heroics",
      title_class:"col-12 col-md-7",
      promo_class: "col-12 col-md-5",
      title:{
        active: true,
        h1:"WE MAKE",
        p:"Great Opportunities",
        active_btn: false,
        button: "Title Action",
      },
      promo:{
        active: true,
        text:{
          active: false,
          h2_a: "Creative",
          h2_b: "WEBSITE",
          p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id interdum vitae, interdum eget elit.`,
          active_btn: true,
          button: "Learn More",
          cls: ""
        },
        flyer:{
          active: true,
          img: "jng/MegaOne/digital-agency/img/two-chairs.png",
          active_btn: false,
          button: "Learn More",
        },
      },
      video:{
        active: true,
        src: "jng/MegaOne/digital-agency/img/events/nov_2021/entrance_video.mp4",
      },
      image:{
        active: false,
        src: "",
      }
    },
    {
      active: false,
      template:"Hero",
      tag:"sunshine",
      title_class: "sun-title-wrapr col-12 col-md-4",
      promo_class: "sun-promo-wrapr col-12 col-md-8",
      title:{
        active: true,
        // h1:"2nd Slide",
        h1: "Employment Summit",
        // p:"Beautiful & Responsive",
        class: "slide-2-title",
        p: "Overcoming Barriers To Hiring District Residents",
        active_btn: false,
        button: "Title Action",
      },
      promo:{
        active: true,
        text:{
          active: false,
          h2_a: "Creative",
          h2_b: "WEBSITE",
          p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id interdum vitae, interdum eget elit.`,
          active_btn: true,
          button: "Learn More",
        },
        flyer:{
          active: true,
          img: "jng/MegaOne/digital-agency/img/two-more.png",
          active_btn: false,
          button: "Learn More",
        },
      },
      video:{
        active: false,
        src: "jng/MegaOne/digital-agency/img/events/nov_2021/entrance_video.mp4",
      },
      image:{
        active: true,
        src: "jng/MegaOne/digital-agency/img/sun-bg.png",
      }
    }
  ],
  promo: {
    h2: "It's going to take the entire village",
    h3: "Now you can make the difference",
    button1:{
      active: true,
      text: "Learn More",
      link: "#",
    },
    button2:{
      active: true,
      text: "Contribute",
      link: "#",
    },
  },
  about: {
    title: "",
    title1: "WHO ",
    title2: "WE ",
    title3: "Are",
    alias: "WhoWeAre",
    // tag: "about",
    services:[
      {
        active: true,
        subtitle: "DC Business Gun Violence Prevention Coalition",
        alias: "Gun Violence Prevention",
        description: "The DC Business Gun Violence Prevention Coalition, comprised of the National Association of Minority Contractors—Washington, DC Metropolitan Area Chapter (NAMC-WMAC), Inner Thoughts, Inc., and the DC Concerned Black Business Owners was established in February 2021 to assist Mayor Bowser’s initiative “Building Blocks DC, Gun Violence Prevention Emergency Operations Center” designed to decrease gun violence in the Nation’s Capitol.",
        // image: "https://images.pexels.com/photos/4638208/pexels-photo-4638208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        image: "jng/MegaOne/digital-agency/img/pexels-sandy-torchon-4638208.jpg",
        credit: "https://www.pexels.com/photo/road-traffic-street-sign-4638208/",
        button: {
          active: true,
          label: "Learn More",
        },
      },
      {
        active: true,
        subtitle: "National Association of Minority Contractors—Washington, DC Metropolitan Area Chapter (NAMC-WMAC)",
        alias: "NAMC-WMAC",
        description: "NAMC-WMAC  is a 501©6 non-profit organization registered in the District of Columbia in 2005 that works with Federal, State and local agencies and construction industry professionals to develop and implement programs and services designed to enhance the competitive viability of minority and women-owned businesses in the Washington, DC Metropolitan Area. Rosalind Styles, President of NAMC-WMAC serves as the lead of the Coalition and the point of contact for management, supervision and reporting of all activities during the planning, implementation and reporting of the JNG Iniatives.",
        // image: "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        image: "jng/MegaOne/digital-agency/img/pexels-anamul-rezwan-1216544.jpg",
        credit: "https://www.pexels.com/photo/person-holding-grinder-1216544/",
        button: {
          active: true,
          label: "Learn More",
        },
      },
      {
        active: true,
        subtitle: "Inner Thoughts, Inc.",
        alias: "Inner Thoughts",
        description: "Inner Thoughts, Inc. established in 1981 is a 501©3 strategic planning, coordination, implementation organization, that also develops, and programs all who are aimed at finding community-based solutions to many of the social determents challenging our residents.  Pastor Doctor David J. Venable who has served as Founding Pastor of the True-Life Redemption Ministries, the redemption Church, Cathedral of Praise and currently serves as Pastor of the Cathedral of Christ.  Known as a Pastor who meets the people where they are and supports the community with food, clothing, and other supports as needed.",
        // image: "https://images.pexels.com/photos/46287/traffic-lights-road-sign-red-yellow-46287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        image: "jng/MegaOne/digital-agency/img/pexels-pixabay-46287.jpg",
        credit: "https://www.pexels.com/photo/light-road-red-yellow-46287/",
        button: {
          active: true,
          label: "Learn More",
        },
      },
      {
        active: true,
        subtitle: "DC Black Concerned Businesses",
        alias: "DC Black Concerned Businesses",
        description: "The DC Black Concerned Businesses was created to provide a platform for Black businesses to advocate for inclusion on the major development and construction initiatives planned in the District of Columbia. A significant number of Black businesses competing in the Certified Business Enterprise (CBE) market has been diluted without their participation being included based on race.  Although a diversity study is current underway for the first time, the Black businesses have coalesced to establish a competitive edge in the accelerated rate of economic recovery projected in the City.",
        // image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        image: "jng/MegaOne/digital-agency/img/pexels-david-mcbee-730547.jpg",
        credit: "https://www.pexels.com/photo/bitcoins-and-u-s-dollar-bills-730547/",
        button: {
          active: true,
          label: "Learn More",
        },
      },
    ],
    images:{
      active: true,
      pot: "jng/MegaOne/digital-agency/img/pot.png"
    },
  },
  videos:{
    list: [
      {
        active: true,
        poster: "jng/MegaOne/digital-agency/img/events/july_2021/fair-video-thumb2.png",
        src: "jng/MegaOne/digital-agency/img/events/july_2021/JNGf.mp4",
        // src: "jng/MegaOne/digital-agency/img/events/july_2021/chief-video-thumb.png",
      },
      {
        active: false,
        poster: "jng/MegaOne/digital-agency/img/events/july_2021/jng-promo-thumb2.png",
        src: "jng/MegaOne/digital-agency/img/events/july_2021/job-fair-clip-1.mp4",
        // src: "jng/MegaOne/digital-agency/img/events/july_2021/chief-video-thumb.png",
      },
      {
        active: true,
        poster: "jng/MegaOne/digital-agency/img/events/july_2021/chief-video-thumb2.png",
        src: "jng/MegaOne/digital-agency/img/events/july_2021/job-fair-clip-2.mp4",
        // src: "jng/MegaOne/digital-agency/img/events/july_2021/chief-video-thumb.png",
      },
    ],
  },
  practices: {
    title: "",
    title1: "WHAT ",
    title2: "WE ",
    title3: "DO",
    effect: "cards",
    alias: "WhatWeDo",
    custom: "white",
    // tag: "practices",
    services:[
      {
        active: true,
        subtitle: "Goal",
        alias: "Goal",
        description: `The goal of the DC Business Gun Violence Prevention Coalition,  is to assist by CREATING JOBS!  The creation of the “Jobs Not Guns Employment Initiative” (herein referred to as the “JNG Initiative”) is to work with companies doing business in the District of Columbia to provide employment opportunities for District residence to participate in the transformation of our city. With potential employers and businesses working in partnership job training, vocational/apprenticeship training programs and social/supportive service providers, we can collectively create a win-win for attaining and sustaining employment of District residents that will lead to a systematic decrease in the perpetrators and recipients of gun violence in the Nation’s Capital. `,
        // image: "https://images.pexels.com/photos/4638208/pexels-photo-4638208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        image: "jng/MegaOne/digital-agency/img/events/july_2021/yellow-jackets.png",
        credit: "https://www.pexels.com/photo/road-traffic-street-sign-4638208/",
        button: {
          active: false,
          label: "Learn More",
        },
      },
      {
        active: true,
        subtitle: "Jobs Not Guns Employment Summit",
        alias: "Summit",
        description: `The Jobs Not Guns Employment Summit is designed to provide a citywide forum for potential employers, training providers, support/social service providers, law enforcement and elected official to meet with District residents, community stakeholders and employment agencies to address the barriers for employing District residents.  It provides an opportunity for employers to present their barriers to hiring district residents and residents to share their challenges for obtaining employment or a track for long-term career opportunities. Conducted both onsite and live-streaming, the Summit provides applicants an overview of their responsibilities to participate in job training or support programs, as needed, to achieve and maintain employment that can lead to a career.`,
        // image: "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        image: "jng/MegaOne/digital-agency/img/events/july_2021/shake-a-hand.png",
        credit: "https://www.pexels.com/photo/person-holding-grinder-1216544/",
        button: {
          active: false,
          label: "Learn More",
        },
      },
      {
        active: true,
        subtitle: "Jobs Not Guns Recruitment Fair",
        alias: "Recruitment Fair",
        description: `The Jobs Not Guns Recruitment Fairs host exhibitors to provide employment, training or supportive services for District residents.  Exhibitors include: 
        •	Federal, District, National and Local employers will provide a list of job openings and conducted individual on-the-spot interviews of applicants for employment;
        •	Building trades unions will accept resumes and applications for apprenticeship training;
        •	District-funded and private job-readiness and vocational training providers to recruit trainees for pre-employment programs; 
        •	Social/Supportive service programs and community organization to register District residents for social/supportive services program.
        `,
        // image: "https://images.pexels.com/photos/46287/traffic-lights-road-sign-red-yellow-46287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        // image: "jng/MegaOne/digital-agency/img/events/nov_2021/in-the-hall.png",
        image: "jng/MegaOne/digital-agency/img/events/nov_2021/IMGL0060-min.png",
        credit: "https://www.pexels.com/photo/light-road-red-yellow-46287/",
        button: {
          active: false,
          label: "Learn More",
        },
      },
    ],
    images:{
      active: false,
      pot: "jng/MegaOne/digital-agency/img/pot.png"
    },
  },
  practices_og: {
    title: "What",
    sub2: "We",
    sub3: "Do",
    card: false,
    sections: [
      {
        active: true,
        alias: "goal",
        cls: "",
        title: "The Goal",
        text: `The goal of the DC Business Gun Violence Prevention Coalition,  is to assist by CREATING JOBS!  The creation of the “Jobs Not Guns Employment Initiative” (herein referred to as the “JNG Initiative” is working with companies doing business in the District of Columbia to provide employment opportunities for District residence and participate in the transformation of our city.  The District has a requirement for businesses and projects utilizing public funds to hire 35% District residents.  With the business community working in partnership with social service providers and job training and/or vocational education programs, we collectively create a win-win for attaining and sustaining employment of District residents that will lead to a systematic decrease in the perpetrators and recipients of gun violence in the Nation’s Capital.`,
      },
      {
        active: true,
        alias: "first",
        cls: "",
        title: "first-of-its-kind",
        text: `The DC Business Gun Violence Prevention Coalition hosted the first-of-its-kind “Jobs Not Guns Recruitment Fair” on July 20, 2021 with a mini-grant from Building Blocks DC through the Progressive Life Center.  The Coalition recruited exhibitors to identify opportunities for District residents for employment, training or supportive services.`,
      },
      {
        active: true,
        alias: "east",
        cls: "",
        title: "East of the River Jobs Not Guns Recruitment Fair",
        text: "The “East of the River Jobs Not Guns Recruitment Fair” was held on Friday, November 19, 2021 at the Entertainment and Sports Arena donated by Events DC and again financially supported by Building Blocks DC through the Progressive Life Center.  The Coalition established an EOR Planning Committee of community stakeholders to assist with managing the design, recruitment, and implementation of the event with the support of Congresswoman Eleanor Holmes Norton, Attorney General Karl Racine, Chief of Police Robert Contee, all members of the Council the District of Columbia, District agencies and major employers.  The event hosted 75 exhibitors comprised of potential employers, apprenticeship and on-the-job training, support and social service providers and was attended by over 200 District residents.",
      },
      {
        active: false,
        alias: "sample",
        cls: "",
        title: "",
        text: "",
      },
    ]
  },
  team:{
    h6:"",//"Lorem ipsum is simply dummy text",
    h2:"Our Creative Team",
    members:[
      {
        src: "jng/MegaOne/digital-agency/img/styles-new2.png",
        alt: "team1",
        name: "Rosalind Styles",
        cls: "tag-team team1",
        bio: `Rosalind T. Styles serves as Manager of the DC Business
              Gun Violence Coalition and the Jobs Not Gun Initiative.
              She has served 15 years as President of National Association
              of Minority Contractors—Washington, DC Metropolitan
              Area Chapter (NAMC-WMAC) and 24 years as President
              and CEO of Capitol City Associates, Inc., a CBE registered
              in the District of Columbia, Federal, Maryland and Virginia
              that maintains her corporate headquarters East of the River in
              Ward 8.  A native of Washington, DC, she has over forty (40)
              years of community-based, federal, foreign service, local and
              private industry administrative and management experience. 
              Her professional career has encompassed the management of
              human resource programs, community development
              programs, contract compliance services and programs geared
              toward enhancing economic development opportunities for
              local and minority residents and businesses.`,
      },
      {
        src:"jng/MegaOne/digital-agency/img/dotti.png",
        alt:"team2",
        name:"Dotti Wade",
        cls: "tag-team team2",
        bio: `Dotti Love Wade serves as the Event Coordinator of the
              Jobs Not Guns Initiative  and is President of
              Wonderworks! a consulting firm specializing in conference
              and event planning, logistics and staffing, personnel
              development, marketing and advertising strategies.  A native
              Washingtonian and retired public administrator for District
              and Federal Governments with 24-year public service and 30
              years in the private sector.  She has served as Board
              Chairman and DC State Board of Education, Executive
              Director of DC Lottery and Charitable Games Control Board.
              Her volunteer service includes 22 years as Advisory
              Neighborhood Commission, Advisory Council for the DC
              Vehicles for Hire Commission and boards of various non-
              profit organizations including the Education (NASBE)
              Government Affairs Committee as Congressional Liaison.`,
      },
      // {
      //   src: "jng/MegaOne/digital-agency/img/rev.png",
      //   alt: "team3",
      //   name: "Anthony Motley",
      // },
    ],
    notes: [
      "DOCS: digital-agency/lib/js/script.js > find li:142 Team OWL Carousel - change response 1000 back to 3",
    ],
  },
  portfolio:{
    topics:[
      { active: true, home: true, filter:"*", label: "ALL",},
      { active: true, home: false, filter: ".summer22", label: "SUMMER 2022", },
      { active: true, home: false, filter: ".fall21", label: "FALL 2021", },
      { active: true, home: false, filter: ".summer21", label: "SUMMER 2021", },
      { active: false, home: false, filter: ".fair", label: "RECRUITMENT FAIR", },
      { active: false, home: false, filter: ".planning", label: "PLANNING", },
      { active: false, home: false, filter: "", label: "", },
    ],
    images: {
      all: event_images,
      july21: july21,
      nov21: nov21,
      july22: july22,
    },
    limit: 7,
  },
  brands:{
    h2: "Our Partners",
    clients: client_list,
  },
  blogs:{
    main:{
      active: true,
      sub:"We Are The Jobs Not Guns Community",
      title1:"Our",
      // title_bold1: "latest blogs",
      title_bold2:"recent news",
      title3: "will keep everyone updated"
    },
    content:[
      {
        active: true,
        img:"jng/MegaOne/digital-agency/img/blog-news-1.jpg",
        // title: "Web design is fun",
        title: "Take a look at our process",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am",
        date: {
          active: true,
          value: "October 29, 2020"
        },
        author:{
          active: false,
          img: "jng/MegaOne/digital-agency/img/avatar-1.png",
          name: "Hena Sword",
          href: "javascript:void(0);",
        },
      },
      {
        active: true,
        img:"jng/MegaOne/digital-agency/img/blog-news-1.jpg",
        title: "See what the press is saying.",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am",
        date: {
          active: true,
          value: "October 29, 2020"
        },
        author:{
          active: false,
          img: "jng/MegaOne/digital-agency/img/avatar-1.png",
          name: "David Villas",
          href: "javascript:void(0);",
        },
      },
      {
        active: true,
        img:"jng/MegaOne/digital-agency/img/blog-news-1.jpg",
        title: "Participate in a vibrant funding community.",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am",
        date: {
          active: true,
          value: "October 29, 2020"
        },
        author:{
          active: false,
          img: "jng/MegaOne/digital-agency/img/avatar-1.png",
          name: "Jhon Walker",
          link: "javascript:void(0);",
        },
      },
    ]
  },
  events: {
    mokup:{
      active: false,
      img: "jng/MegaOne/digital-agency/img/blog-mokeup.png",
    },
    img_slider: false,
    data: [
      {
        active: false,
        text1:"sample",
        text2: "",
        text3: "",
        sub: "",
        sub2:"",
        sub3:"",
        p: "",
        button: {
          active: true,
          text: "",
          href: "javascript:void(0);",
        },
        img: "jng/MegaOne/digital-agency/img/blog-mokup-img-2.png",
        target: "_SELF",
        // img dimensions 402 X 230
      },
      {
        active: true,
        alias: "summit",
        text1: "Ward 5",
        text2: "Recruitment",
        text3: "Fair",
        // sub: "Thursday, June 16, 2022 from 10:00 a.m. until 2:00 p.m.",
        sub: "Wednesday, November 16, 2022",
        // sub2:"SUMMIT 11:00 am - 10:30 am",
        sub3:"RECRUITMENT FAIR 11:00 am - 3:00 pm",
        // p: "The JNG Summit will provide an opportunity for employers to present their barriers to hiring district residents and residents will share their challenges for obtaining employment or a track for long-term career opportunities.",
        button: {
          active: false,
          text: "Register",
          href: "https://www.eventbrite.com/e/jobs-not-guns-overcoming-barriers-to-employment-summit-and-recruitment-fair-tickets-348993608277",
        },
        button2: {
          active: false,
          text: "Register",
          href: "https://www.eventbrite.com/e/jobs-not-guns-overcoming-barriers-to-employment-summit-and-recruitment-fair-tickets-348993608277"
        },
        // img: "jng/MegaOne/digital-agency/img/jng-summit-draft.png",
        // img: "jng/MegaOne/digital-agency/img/jng-w1-savethedate.png",
        // img: "jng/MegaOne/digital-agency/img/jng-w1-savethedate_og.png",
        img: "jng/MegaOne/digital-agency/img/jng-w5-savethedate-fall-2022_og.png",
        target: "_BLANK",
      },
      {
        active: false,
        alias: "summit",
        text1: "Ward 1",
        text2: "Summit",
        text3: "and Recruitment Fair",
        // sub: "Thursday, June 16, 2022 from 10:00 a.m. until 2:00 p.m.",
        sub: "Wednesday, July 27, 2022",
        sub2:"SUMMIT 8:30 am - 10:30 am",
        sub3:"RECRUITMENT FAIR 11:00 am - 3:00 pm",
        // p: "The JNG Summit will provide an opportunity for employers to present their barriers to hiring district residents and residents will share their challenges for obtaining employment or a track for long-term career opportunities.",
        button: {
          active: false,
          text: "Register",
          href: "https://www.eventbrite.com/e/jobs-not-guns-overcoming-barriers-to-employment-summit-and-recruitment-fair-tickets-348993608277",
        },
        button2: {
          active: true,
          text: "Register",
          href: "https://www.eventbrite.com/e/jobs-not-guns-overcoming-barriers-to-employment-summit-and-recruitment-fair-tickets-348993608277"
        },
        // img: "jng/MegaOne/digital-agency/img/jng-summit-draft.png",
        // img: "jng/MegaOne/digital-agency/img/jng-w1-savethedate.png",
        img: "jng/MegaOne/digital-agency/img/jng-w1-savethedate_og.png",
        // img: "jng/MegaOne/digital-agency/img/jng-w5-savethedate-fall-2022_og.png",
        target: "_BLANK",
      },
      {
        active: true,
        text1: "SEE OUR",
        text2: "PAST",
        text3: "EVENTS",
        sub: "",
        p: `The DC Business Gun Violence Prevention Coalition hosted the ‘JOBS NOT GUNS RECRUITMENT FAIR” on Tuesday, July 20, 2021 at the Martin Luther King, Jr. Library located at 901 G Street, NW, Washington, DC 20001 from 11:00 a.m. until 3:00 p.m.

        The Planning Committee hosted 47 exhibitors comprising  of  a Registration Portal on EVENBRITE for potential exhibitors and attendees.  On-site registration of attendees was 57; approximately 85-90.  
        `,
        button: {
          active: true,
          text: "All Events",
          href: `${location.origin}/events/`,
        },
        // img: "jng/MegaOne/digital-agency/img/jng-events-img.png",
        img: "jng/MegaOne/digital-agency/img/jng-social-flyer2.png",
        target: "_SELF",
      },
    ],
    pot: "jng/MegaOne/digital-agency/img/pot-2.png",
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
  partners: {
    title_bold: "Our",
    title: "Partners",
    button: "News Feed",
  list: [
      { img: "jng/lib/images/partners/stars.png" },
      { img: "jng/lib/images/partners/building-blocks.svg" },
      { img: "jng/lib/images/partners/events-DC.svg" },
      { img: "jng/lib/images/partners/DC-does.svg" },
      { img: "jng/lib/images/partners/DFHV.svg" },
      { img: "jng/lib/images/partners/CSOSA.png" },
      { img: "jng/lib/images/partners/MPD2.png" },
      { img: "jng/lib/images/partners/ACC.png" },
      { img: "jng/lib/images/partners/pepco.svg" },
      { img: "jng/lib/images/partners/DC-seal2.png" },
      // { img: "jng/lib/images/partners/2.png" },
    // { img: "jng/lib/images/sponsors/creative-graphic-unique2.png" },
    // { img: "jng/lib/images/sponsors/graphic-design-genuine2.png" },
    // { img: "jng/lib/images/sponsors/creative-special2.png" },
    // { img: "jng/lib/images/sponsors/creative-design-unique2.png" },
    // { img: "jng/lib/images/sponsors/creative-graphic2.png" },
    // { img: "jng/lib/images/sponsors/premium2.png" },
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
    title: "OUR LOCATION",
    sub: "NAMC-WMAC",
    address: "2307 Skyland Place, SE – Suite A",
    zip: "Washington, D.C. 20020",
    phone: "202-678-8840",
    email: "info@namcdc.org",
  },// contact
  foot:{
    title1: "Jobs ",
    title2: "Not Guns",
    menu: menu_array,
    year: "2022",
    copy: "Developer ",
    url: "https://sunzao.us/brand/business/",
    creator: "BusinessTech by sunzao",
    social: social_icons,
  },
  fixed_nav:{
    images:{
      logo:"jng/EventCamp/images/jobsnotguns.png",
    }
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
    image: "jng/lib/images/jobsnotguns.png",
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