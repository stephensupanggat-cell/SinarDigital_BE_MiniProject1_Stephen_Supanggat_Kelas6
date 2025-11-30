const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../../data/data.json');

const readData = () => {
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(raw);
};

const writeData = (obj) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(obj, null, 2), 'utf8');
};

const sanitizeAndFormat = (form) => {
  const trim = (v) => v?.toString().trim() || '';

  const formatted = {
    name: trim(form.name),
    email: trim(form.email),
    age: form.age ? Number(form.age) : null,
    message: trim(form.message)
  };

  return formatted;
};

exports.handleSubmit = (req, res, next) => {
  try {
    const processed = sanitizeAndFormat(req.body);
    const db = readData();

    const id = db.submissions.length + 1;

    const newEntry = {
      id,
      createdAt: new Date().toISOString(),
      ...processed
    };

    db.submissions.push(newEntry);
    writeData(db);

    res.redirect('/submissions');
  } catch (err) {
    next(err);
  }
};

exports.getSubmissionsJson = (req, res, next) => {
  try {
    const db = readData();
    res.json(db.submissions);
  } catch (err) {
    next(err);
  }
};

exports.renderSubmissionsPage = (req, res, next) => {
  try {
    const db = readData();

    const rows = db.submissions
      .slice()
      .reverse()
      .map(s => `
        <li>
          <strong>${s.name}</strong> (${s.email}) — ${s.age || '-'} years<br />
          <em>${s.message || '-'}</em><br />
          <small>Submitted: ${s.createdAt}</small>
        </li>
      `)
      .join('');

    res.send(`
      <h2>Submissions</h2>
      <p><a href="/">Home</a> | <a href="/contact">Submit again</a></p>
      <ul>${rows || '<li>No submissions yet</li>'}</ul>
      <hr />
      <p>Raw JSON: <a href="/api/submissions">/api/submissions</a></p>
    `);
  } catch (err) {
    next(err);
  }
};
