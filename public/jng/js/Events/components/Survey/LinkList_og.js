
import React from 'react';
import SimpleTree from '../../../elements/SimpleTree';

const BUSINESS = "business", 
AGENCY = "agency",
GENERAL = "general",
APPLICANT = "applicant";

let dl_btns = `linkList_dnld w3-btn w3-card`;
let link_prefix = `forms`;// `${location.origin}/forms`

const LinkList = (props) => {

  const {callback, active_form = ""} = props;

  const surveys = {
    applicants: "https://www.surveymonkey.com/r/HJHY8VD",
    employers: "https://www.surveymonkey.com/r/HCR9W7L",
    services: "https://www.surveymonkey.com/r/GHFFQY3",
  }
  /**
   * Employers: https://www.surveymonkey.com/r/HCR9W7L
   * Employees: https://www.surveymonkey.com/r/HJHY8VD
   * Service Providers: https://www.surveymonkey.com/r/GHFFQY3
   */

  const nav_to_survey = (val) => { 
    // nav to survey in val
    switch (val) {
      case `${BUSINESS}`:
          // this prevents the use of the back btn to return to this page
          location.replace(surveys.employers);
          // window.open(surveys.employers, '_blank');// WORKS
        break;
      case `${AGENCY}`:
          // this prevents the use of the back btn to return to this page
          location.replace(surveys.services);
          // window.open(surveys.services, '_blank');// WORKS
        break;
        
      default:
          // this prevents the use of the back btn to return to this page
          location.replace(surveys.applicants);
          // window.open(surveys.applicants, '_blank');// WORKS
        break;
    }
   }

   let description = `click to complete registration.`;

  return (
    <div className={`linkList_wrapper ${active_form}`}>
      <div className="linkList_inner">
        <SimpleTree {...{ title: "Business and Contractor", description, hTag: "h3", variant: `${active_form == BUSINESS ? "active" : ""} ${BUSINESS}`, callback: () => {
          nav_to_survey(BUSINESS);
        }}} />
        <SimpleTree {...{
          title: "Agency and Training", description, hTag: "h3", variant: `${active_form == AGENCY ? "active" : ""} ${AGENCY}`, callback: () => {
            nav_to_survey(AGENCY);
          }}} />
        <SimpleTree {...{ title: "General Admission", description, hTag: "h3", variant: `${active_form == GENERAL ? "active" : ""} ${GENERAL}`, callback: () => {
          nav_to_survey(GENERAL);
        }}} />
        <SimpleTree {...{
          title: "Job Applicant", description, hTag: "h3", variant: `${active_form == APPLICANT ? "active" : ""} ${APPLICANT}`, callback: () => {
          nav_to_survey(APPLICANT);
        }}} />
      </div>
    </div>
  )
};

export default LinkList
