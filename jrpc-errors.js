let errors = fs.readFileSync('jrpc-errors.json', { encoding: 'utf8' });
module.exports = errors;