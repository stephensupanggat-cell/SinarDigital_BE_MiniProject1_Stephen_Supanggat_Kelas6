exports.validateSubmission = (req, res, next) => {
const { name, email, age } = req.body;


const errors = [];
if (!name || String(name).trim().length < 2) errors.push('Name must be at least 2 characters');
if (!email || !String(email).includes('@')) errors.push('Valid email required');
if (age && Number(age) <= 0) errors.push('Age must be a positive number');


if (errors.length) {

return res.status(400).send(`
<h3>Validation error</h3>
<ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul>
<p><a href="/contact">Back to form</a></p>
`);
}


next();
};