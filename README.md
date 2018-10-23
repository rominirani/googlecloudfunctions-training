# Google Cloud Functions Training

Refer to the [Google Cloud Functions Tutorial Series](https://rominirani.com/google-cloud-functions-tutorial-series-f04b2db739cd), which is a companion set of blog posts for all the examples covered here.

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
 - `firestore-http` : Cloud Function with HTTP Trigger. This function demonstrates how to build a quiz powered by Firestore database.
 - `puppeteer` : Cloud Function with HTTP Trigger. This functions demonstrates how to use headless Chrome via Puppeteer npm library. It accesses a web page and extracts out the image from the web page. 
 
You can use Google Cloud Shell here to clone the repository. Simply click on the "Open in Cloud Shell" button below. This will clone the repository in your Google Cloud Account's Cloud Shell.
 
 [![Open in Cloud Shell](http://gstatic.com/cloudssh/images/open-btn.png)](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/rominirani/googlecloudfunctions-training)
 
## Running Tutorials in Google Cloud Shell

You will `tutorial.md` files present in the following folders of the cloned repository:
- `helloworld-http`
- `hellogreeting-http`
- `uuid-http`
- `hello-gcs`
- `hello-pubsub`
- `getrandomquote-function`

From Google Cloud Shell, simply go to the respective folder and then launch the tutorial in Google Cloud Shell via the `teachme tutorial.md` command.

For e.g. to launch the tutorial for `helloworld-http`, do the following:
```
$ cd helloworld-http
$ teachme tutorial.md
```

## Other Files
- `cleanup.txt` : Contains a set of `gcloud` commands to delete all the Google Cloud Platform resources created i.e. Cloud Functiosn, Cloud Pub/Sub Topic, Cloud Storage Bucket, etc. This script can be useful to start from scratch. Just ensure that you have done a `gcloud auth login` and `gcloud config set project <project-id>` for the particular Google Cloud Platform project.
- `deploy.txt` : Contains a set of `gcloud` commands to deploy all the above Cloud Functions. 
- `commands.txt` : A set of useful commands that are used throughout the training. 
