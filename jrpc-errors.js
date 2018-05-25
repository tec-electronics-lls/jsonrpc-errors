let errors = fs.readFileSync('jrpc-errors.json', { encoding: 'utf8' });

for (error in errors) {
    delete(errors[errors].data);
}

module.exports = errors;