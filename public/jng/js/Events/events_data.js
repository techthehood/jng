import { july22 as july22_photos, nov21 as nov21_photos, july21 as july21_photos } from '../Main/event_images';

export const july22 = {
  alias: "nov21", 
  title: "WARD 1 SUMMIT AND RECRUITMENT FAIR",
  sub: "July 27, 2022",
  description: `The Jobs Not Guns Employment Summit is designed to provide a citywide forum for potential employers, training providers, support/social service providers, law enforcement and elected official to meet with District residents, community stakeholders and employment agencies to address the barriers for employing District residents. It provides an opportunity for employers to present their barriers to hiring district residents and residents to share their challenges for obtaining employment or a track for long-term career opportunities. Conducted both onsite and live-streaming, the Summit provides applicants an overview of their responsibilities to participate in job training or support programs, as needed, to achieve and maintain employment that can lead to a career.`,
  has_background: false, 
  card: true, 
  image:"jng/MegaOne/digital-agency/img/july22-production-flyer.png",
  // image:"jng/MegaOne/digital-agency/img/july22-quick-flyer.png",
  // button1: {active: false, text: "Explore", url: `https://beta.jobsnotguns.com/events/november-2021/` },
  button1: {active: false, text: "Explore", url: `${location.origin}/events/november-2021/` },
  photos: july22_photos,
}

export const nov21 = {
  alias: "nov21", 
  title: "EAST OF THE RIVER JOBS NOT GUNS RECRUITMENT FAIR",
  sub: "November 19, 2021",
  description: `The DC Business Gun Violence Prevention Coalition hosted the EAST OF THE RIVER JOBS NOT GUNS RECRUITMENT FAIR” on Friday, November 19, 2021 at the Entertainment and Sports Arena donated by Events DC and again financially supported by Building Blocks DC through the Progressive Life Center.  The Coalition established an EOR Planning Committee of community stakeholders to assist with managing the design, recruitment and implementation of the event with the support of the Congresswoman Eleanor Holmes Norton, Attorney General Karl Racine, Chief of Police Robert Contee, all member of the Council the District of Columbia, District agencies and major employers.  The event hosted 75 exhibitors comprised of potential employers, apprenticeship and on-the-job training, support and social service providers and was attended by over 200 District residents.`,
  has_background: false, 
  card: true, 
  image:"jng/MegaOne/digital-agency/img/jng-flyer-1.jpg",
  // button1: {active: true, text: "Explore", url: `https://beta.jobsnotguns.com/events/november-2021/` },
  button1: {active: true, text: "Explore", url: `${location.origin}/events/november-2021/` },
  photos: nov21_photos,
}

export const july21 = {
  alias: "",
  title: "JOBS NOT GUNS RECRUITMENT FAIR",
  sub: "July 20, 2021",
  description: `The DC Business Gun Violence Prevention Coalition hosted the ‘JOBS NOT GUNS RECRUITMENT FAIR” on Tuesday, July 20, 2021 at the Martin Luther King, Jr. Library located at 901 G Street, NW, Washington, DC 20001 from 11:00 a.m. until 3:00 p.m.

  The Planning Committee hosted 47 exhibitors comprising  of  a Registration Portal on EVENBRITE for potential exhibitors and attendees.  On-site registration of attendees was 57; approximately 85-90.  
  `,
  has_background: false, 
  card: true, 
  image:"jng/MegaOne/digital-agency/img/jng-social-flyer2.png",
  button1: {active: false, text: "Explore", url: `#` },
  photos: july21_photos,
}

export const promo = {
  h2: "We need all hands on deck",
  h3: "Take a moment, make a difference",
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
};

export const feat = {
  h1: "Ward 5 Recruitment Fair",
  h3: "November 16, 2022",
  button1:{
    active: true,
    text: "Explore",
    link: "#",
  },
  button2:{
    active: true,
    text: "Register",
    // link: "https://www.eventbrite.com/e/ward-1-jobs-not-guns-summit-and-recruitment-fair-tickets-348993608277",
    link: "#",
  },
}

export const event_data = {
  feat,
  july22,
  nov21,
  july21,
  promo,
}