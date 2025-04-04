const express = require('express');
const chalk = require('chalk');
const router = express.Router();
const cors = require('cors');// make sure not just anyone can use my post requests
const keys = require('../../../utils/keys');
const production = false;

// console.log(chalk.cyan(`[jng] keys`),keys);


  router.get('/november-2021', (req, res) => {
    // res.send('Hello express!')
    console.log(`[top jng] running!`);
    res.render('november-2021', {
      title: 'Rocket',
      name: 'Author Name',
      use_local_files: keys.use_local_files,
      production,// works
    })
  });

module.exports = router;
