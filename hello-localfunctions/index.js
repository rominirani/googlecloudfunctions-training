const greet = (req, res) => {
    console.log('Hello Google Cloud Functions Emulator');
    res.send('Success');
};

module.exports = {
    greet,
};