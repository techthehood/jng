const express = require('express');
const chalk = require('chalk');
const router = express.Router();
const cors = require('cors');// make sure not just anyone can use my post requests
const keys = require('../../../utils/keys');

const production = false;// IMPORTANT determines which views will be used

const events = require("./events");
const display_console = false;

const corsOptions = require('../../../utils/cors-options.js');

  // console.log(chalk.cyan(`[jng] keys`),keys);

  router.all('/*', cors(corsOptions), async (req, res, next) => {
    if (display_console || false) console.log('[cors/passport] passed');
    next();
  });

  // router.use("/events",events);// i want to use react router for events


  // if not external files use these get methods to return
  // request based on what if found in the urls pathname
  router.get('/sample', cors(corsOptions), (req, res) => {
    // res.send('Hello express!')
    console.log(`[top jng] running!`);
    res.render('sample', {
      title:'Rocket',
      name: 'Author Name'
    })
  });

  router.get('/full', cors(corsOptions), (req, res) => {
    // res.send('Hello express!')
    console.log(`[top jng] running!`);
    res.render('full', {
      title:'Rocket',
      name: 'Author Name'
    })
  });

  router.get('/main', cors(corsOptions), (req, res) => {
    // res.send('Hello express!')
    console.log(`[top jng] running!`);
    res.render('jng', {
      title:'Rocket',
      name: 'Author Name',
      use_local_files: keys.use_local_files,
      production,
    })
  });

  router.get('/soon', cors(corsOptions), (req, res) => {
    // res.send('Hello express!')
    console.log(`[top jng] running!`);
    res.render('jsoon', {
      title: 'Rocket',
      name: 'Author Name',
      use_local_files: keys.use_local_files,
    })
  });

  router.get('/*', cors(corsOptions), (req, res) => {
    // res.send('Hello express!')
    console.log(`[top jng] running!`);
    let rte = 'jng';//'november-2021';// 
    res.render(rte, {
      title: 'Rocket',
      name: 'Author Name',
      use_local_files: keys.use_local_files,
      force_cdn: true,
      production,// works
    })
  });

module.exports = router;
