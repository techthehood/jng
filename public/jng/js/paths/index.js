export const MAIN_PATH = '/';
export const NOV_EVT_PATH = '/events/:date';
// currently events/:data will take any value and display the november event page
// i need this to be specific about what the value is and what to display
export const EVENTS_PATH = '/events'
export const SIGN_UP_PATH = '/signup';
export const SIGN_IN_PATH = '/signin';
export const DASHBOARD_PATH = '/dashboard';
export const SUCCESS_PATH = "/";// LOGIN_SUCCESS_REDIRECT
export const CONFIRM_PATH = '/confirm';
export const ARTICLE_PATH = '/articles/:article';
// export const CORE_PATH = '/core';// why did i comment this out? because redirecty to core this way tries to nav to a page controlled by
// this react router which the actual core is not.

// IMPORTANT all new routes have to be added to the src/server.js file
/**
 * app.use('/events',express.static(publicDirectoryPath));// IMPORTANT needed for new paths added to react router
 * app.use('/events/:val1?',express.static(publicDirectoryPath));
 */