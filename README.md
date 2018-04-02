# Google Cloud Functions Video Training

This project contains multiple projects that will be used during the training. Each of the projects is a Google Cloud Function that will be demonstrated during the course.

The projects are:

 - `helloworld-http` : Cloud Function with HTTP Trigger. Does not require any parameters to be passed.
 - `hellogreeting-http` : Cloud Function with HTTP Trigger. Takes in a `data` parameter that is a JSON formatted data.
 - `uuid-http` : Cloud Function with HTTP Trigger. Demonstrates use of external dependencies. 
 - `hello-gcs` : Cloud Function with GCS Trigger. It gets invoked when a file is created/updated in GCS. 
 - `hello-pubsub` : Cloud Function with PubSub Trigger. It subscribes to a topic and is invoked when a message is published to that topic. 
