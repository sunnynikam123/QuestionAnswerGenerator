const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const dotenv = require('dotenv');
const path = require('path')
dotenv.config({ path: './config.env' });
require('./conn')

const PORT = 3001;
const router = require('./router/router')
app.use('/',router)
app.use(cors({
  origin: '*',
  methods: ['GET'],
  allowedHeaders: ['Content-Type'],
  credentials:true,
}));
app.options('*', cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.get('/scan', (req, res) => {
  const { url, tuning } = req.query;

  if (!url || !tuning ) {
    return res.status(400).send('Invalid URL or Tuning option');
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // const niktoPath = 'C:\\nikto-2.5.0\\program\\nikto.pl';
  const niktoPath = path.join('C:', 'nikto-2.5.0', 'program', 'nikto.pl');
  const nikto = spawn('perl', [niktoPath, '--host', url, '--Tuning', tuning]);

  nikto.stdout.on('data', (data) => {
    console.log(`data: ${data.toString().replace(/\n/g, '\n')}\n\n`)
    res.write(`data: ${data.toString().replace(/\n/g, '\n')}\n\n`);
  });

  nikto.stderr.on('data', (data) => {
    res.write(`data: ${data.toString().replace(/\n/g, '\n')}\n\n`);
  });

  nikto.on('close', (code) => {
    res.write(`Scanning Target Complete code ${code}\n\n`);
    res.end();
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
