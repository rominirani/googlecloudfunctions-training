'use strict';
const Storage = require('@google-cloud/storage');
const Translate = require('@google-cloud/translate');

// Instantiates a client
const storage = Storage();
const translate = Translate();

function getFileStream(file) {
    if (!file.bucket) {
        throw new Error('Bucket not provided. Make sure you have a "bucket" property in your request');
    }
    if (!file.name) {
        throw new Error('Filename not provided. Make sure you have a "name" property in your request');
    }

    return storage.bucket(file.bucket).file(file.name).createReadStream();
}

function getWriteFileStream(bucketname, filename) {
    return storage.bucket(bucketname).file(filename).createWriteStream();
}


exports.processFile = function (event, callback) {
    const file = event.data;
    console.log('Processing file: ' + file.name);

    if (file.resourceState === 'not_exists') {
        // This is a file deletion event, so skip it
        callback();
        return;
    }

    let remoteFile = getFileStream(file);
    let translatedFile = getWriteFileStream('gcs-function-translation-bucket_es', file.name);

    let dataLength = 0;
    let dataContents = "";
    //Read the contents
    remoteFile
        .on('error', function (err) {})
        .on('response', function (response) {
            // Server connected and responded with the specified status and headers.
        })
        .on('data', function (chunk) {
            dataLength += chunk.length;
            dataContents += chunk;
        })
        .on('end', function () {
            console.log(dataContents);
            translate.translate(dataContents, 'es', function (err, translation) {
                if (!err) {
                    console.log(translation);
                    translatedFile.write(translation);
                    translatedFile.end()
                    callback('', 'Translation Done');
                }
            });
        })
};