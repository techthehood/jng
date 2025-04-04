const { HOSTNAME, DOMAIN_NAME, SERVER_PORT, LOCAL_PORT } = require('./keys');

// var whitelist = ['http://jobsnotguns1.com', 'http://jobsnotguns2.com'];
var whitelist = [
  'https://jobsnotguns.com',
  'https://www.jobsnotguns.com',
  'https://events.jobsnotguns.com'
];

if (process.env.NODE_ENV == "development") {
  whitelist.push(`http://localhost:${LOCAL_PORT}`);
}

console.log(`[cors] src whitelist`,whitelist);
// this works
// var corsOptions = {
//   origin: 'https://jobsnotguns.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

//GOTCHA: v8::internal::Heap::PerformGarbageCollection
// learn node perform garbage collection

const corsOptions = {
  methods: "GET,POST",
  origin: function (origin, callback) {
    console.log("[cors origin]",origin);//sometimes its undefined
    if(!origin) return callback(null, true);

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback('Not allowed by CORS')
    }//else
  }
}//corsOptions

module.exports = corsOptions;
