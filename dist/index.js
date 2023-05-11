#! /usr/bin/env node
import r from"dotenv";import s from"inquirer";import t from"clipboardy";s.prompt([{type:"editor",name:"env",message:"Paste in your .env file"}]).then(({env:o})=>{let e=r.parse(o),n=JSON.stringify(e,null,2);t.writeSync(n),console.log("\u2705 Successfully copied JSON to clipboard.")}).catch(o=>{console.log(o.message)});
