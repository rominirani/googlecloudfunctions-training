# Google Cloud Functions Training

This project contains multiple projects that will be used during the training. Each of the projects is a Google Cloud Function that will be demonstrated during the course.

The projects are:

 - `helloworld-http` : Cloud Function with HTTP Trigger. Does not require any parameters to be passed.
 - `hellogreeting-http` : Cloud Function with HTTP Trigger. Takes in a `data` parameter that is a JSON formatted data.
 - `uuid-http` : Cloud Function with HTTP Trigger. Demonstrates use of external dependencies. 
 - `hello-gcs` : Cloud Function with GCS Trigger. It gets invoked when a file is created/updated in GCS. 
 - `hello-pubsub` : Cloud Function with PubSub Trigger. It subscribes to a topic and is invoked when a message is published to that topic. 
 - `hello-localfunctions` : Cloud Function with HTTP Trigger. This is used to demonstrate the local functions tool and debugging functions locally.
 - `bitcoinprice-http` : Cloud Function with HTTP Trigger. This function makes a call to Coinbase API for Bitcoin price and returns back a Hangouts message format. 
 - `translation-process` : Cloud Function with GCS Trigger. This function gets triggered when files are uploaded in the configured GCS Bucket. It will then invoke the Translation API to translate the documents to Spanish and place the translated files in another GCS bucket.
 - `getrandomquote-function` : Cloud Function with HTTP Trigger. This function acts as an API and returns a random quote.
 
 
 [![Open in Cloud Shell](http://gstatic.com/cloudssh/images/open-btn.png)](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/rominirani/googlecloudfunctions-training)
