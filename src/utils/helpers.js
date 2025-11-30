exports.sanitizeAndFormat = (data) => {
const keys = Object.keys(data);


const result = keys.reduce((acc, k) => {
let v = data[k];
if (typeof v === 'string') v = v.trim();
acc[k] = v;
return acc;
}, {});


const allowed = ['name', 'email', 'age', 'message'];
return allowed.reduce((obj, key) => {
if (result[key] !== undefined && result[key] !== '') obj[key] = result[key];
return obj;
}, {});
};