#! /usr/bin/env node

import dotenv from 'dotenv';
import inquirer from 'inquirer';
import clipboardy from 'clipboardy';

inquirer
  .prompt([{ type: 'editor', name: 'env', message: 'Paste in your .env file' }])
  .then(({ env }) => {
    const result = dotenv.parse(env);
    const json = JSON.stringify(result, null, 2);
    clipboardy.writeSync(json);
    console.log('✅ Successfully copied JSON to clipboard.');
  })
  .catch((error) => {
    console.log(error.message);
  });
