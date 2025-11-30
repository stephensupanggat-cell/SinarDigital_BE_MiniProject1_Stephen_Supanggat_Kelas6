module.exports = (err, req, res, next) => {
console.error(err);
res.status(500).send(`
<h3>Server Error</h3>
<pre>${err.message}</pre>
<p><a href="/">Home</a></p>
`);
};