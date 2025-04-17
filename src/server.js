const path = require('path');

const express = require('express');
// const proxy = require('http-proxy-middleware');
const hbs = require('hbs');
const chalk = require('chalk');
const cors = require('cors');// make sure not just anyone can use my post requests
const os = require('os');
const display_console = false;

// console.log(`[server] process versions`,process.versions);

const corsOptions = require('../utils/cors-options.js');
const process_memory = require('../utils/process_memory.js');
const Keys = require('../utils/keys').mongodb;
const { HOSTNAME, DOMAIN_NAME, SITE_SERVER, SERVER_PORT, BETA_PORT, LOCAL_PORT, NODE_ENV } = require('../utils/keys');

console.log(`[jng server.js] HOSTNAME`, HOSTNAME);
console.log(`[server.js] os hostname`, os.hostname());
console.log(`[server.js] SITE_SERVER`, SITE_SERVER);
console.log(`[server.js] BETA_PORT`, BETA_PORT);

const USE_PORT = typeof SITE_SERVER != "undefined" && SITE_SERVER.includes("beta") ? BETA_PORT : SERVER_PORT;

let PORT = (os.hostname().includes(HOSTNAME)) ? USE_PORT : LOCAL_PORT;
console.log(`[server.js] PORT`, PORT);

//routers
// const webpushRouter = require("./routers/web-push");
// const savepushRouter = require("./routers/save-push");
const pagesRouter = require("./routers/pages");
const jngRouter = require("../public/jng/routers/jng");
const jngAPIRouter = require('../public/jng/routers/api');


// console.log('forecast = ',forecast);

console.log(`[dirname]`,__dirname);
console.log(`[dirname public path]`,path.join(__dirname,"../public"));

// var nR_Proxy = proxy('/req', {
//   target: `https://${DOMAIN_NAME}/`,
//   changeOrigin: true
// })

const app = express();
//GOTCHA: when i tried to leave the files in templates instead of templates/views it failed

// mongo db setup

const viewsPath = path.join(__dirname,"../templates/views");
const jngPath = path.join(__dirname,"../public/jng/views");

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', [viewsPath, jngPath]);//this works

// set up the partials path
const partialsPath = path.join(__dirname,"../templates/partials");
const jngPartialsPath = path.join(__dirname, "../public/jng/views");
hbs.registerPartials(partialsPath);
hbs.registerPartials(jngPartialsPath);

hbs.registerHelper('vendor', function (name, use_local_files, force_local) {
  if (display_console || false) console.log(chalk.red(`[vendor] use_local_files name = `), name, typeof name);
  if (display_console || true) console.log(chalk.red(`[vendor] use_local_files`), use_local_files, typeof use_local_files);
  // if(display_console || false) console.log(chalk.red(`[vendor] force_local`),force_local, typeof force_local);
  let force_local_file = (typeof force_local == "boolean" && force_local == true) ? true : false;
  return (typeof use_local_files == "string" && use_local_files == "true" || force_local_file) ? `${name}_local` : name;
});

hbs.registerHelper('bundle', function (name, prod = false) {
  if (display_console || true) console.log(chalk.red(`[bundle helper] name = `), name, typeof name);
  if(display_console || true) console.log(chalk.red(`[bundle helper] prod`),prod, typeof prod);
  // if(display_console || true) console.log(chalk.magenta(`[bundle helper] NODE_ENV`),NODE_ENV);
  let in_production = (typeof prod == "boolean" && prod == true) ? true : false;
  return (in_production) ? `${name}_prod` : `${name}_dev`;
});

hbs.registerHelper('json', function(context) {
  // why stringify the data?
    let data_str = JSON.stringify(context);
    return JSON.stringify(data_str);
    /**
      * usage:
      * window['HOST_DATA'] = JSON.parse({{{json data}}});//its a string
      */
});

hbs.registerHelper('is_first', function (ndx) {
  return ndx == 0;
});

hbs.registerHelper('is_even', function (ndx) {
  return ndx % 2 == 0;
});


// path to public directory - where to find external files
//setup static directory to serve - server default/root
// this along with the nginx server blocks directs paths to specific 'public' site directories
const publicDirectoryPath = path.join(__dirname,"../public");
app.use('/',express.static(publicDirectoryPath));
app.use('/api', express.static(publicDirectoryPath));
app.use('/events',express.static(publicDirectoryPath));// IMPORTANT needed for new paths added to react router
app.use('/events/:val1?',express.static(publicDirectoryPath));
app.use('/:val1?',express.static(publicDirectoryPath));// WORKS instead of confirm (this serves as a wildcard)

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());

// app.use(express.static(publicDirectoryPath));// formerly

// app.use('/req',nR_Proxy);

// setup all routers
app.use(pagesRouter);
app.use('/',jngRouter);
app.use('/api', jngAPIRouter);// server side auth OAUTH DOCS:

// app.options('/req/post', cors(corsOptions),function(req,res){
//   res.setHeader("Access-Control-Allow-Origin",`https://${req.host}`);
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.end();
// });
// app.get('/',(req, res) => {
//   res.redirect('/sample');
//   // this works to redirectthe origin to anywhere
// })


//catchall has to be last to work
app.get('*', cors(corsOptions), (req, res) => {
  // res.send('my 404 page')
  console.log('[express server] rendering 404')
  res.render('404', {
    title:'404',
    errorMessage:'page not found'
  });
})

// app.get('/help', (req, res) => {
//   res.send('Help page')
// })
// in this case '/help' and '/help.html' in the public folder are both running


app.listen(PORT, () => {
  console.log(`[process] versions`, process.versions);
  console.log(`Server is up on port ${PORT}.`);
  process_memory();
})

// process.exit();
