const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');



router.get('/', (req, res) => {
res.send(`
<h1>Welcome to Mini Project 1</h1>
<p><a href="/about">About</a> | <a href="/contact">Contact (form)</a> | <a href="/submissions">View Submissions</a></p>
`);
});



router.get('/about', (req, res) => {
res.send(`
<h2>About This App</h2>
<p>This is a simple Express prototype for Mini Project 1.</p>
<p><a href="/">Home</a></p>
`);
});



router.get('/contact', (req, res) => {
res.send(`
<h2>Contact / Submission Form</h2>
<form method="POST" action="/api/submit">
<label>Name: <input type="text" name="name" required /></label><br />
<label>Email: <input type="email" name="email" required /></label><br />
<label>Age: <input type="number" name="age" min="1" /></label><br />
<label>Message:<br /><textarea name="message"></textarea></label><br />
<button type="submit">Submit</button>
</form>
<p><a href="/">Home</a></p>
`);
});



router.get('/submissions', apiController.renderSubmissionsPage);


module.exports = router;