/**
 * Responds to any HTTP request that can provide a "name" field in the body with a greeting.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.helloGreeting = (req, res) => {
    console.log(req.body);
    // Example input: {"name": "GCF"}
    if (req.body.name === undefined) {
        // This is an error case, as "name" is required.
        res.status(400).send('No name defined!');
    } else {
        console.log(req.body.name);
        res.status(200).send('Hello ' + req.body.name);
    }
};