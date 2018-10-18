# Creating a Pub/Sub Trigger based Google Cloud Function (Background Functions)

## Creating a Pub/Sub Trigger Function
We shall create a simple Cloud Function that will get invoked in an asynchronous fashion when a message is published to a particular Pub/Sub Topic. In other words, our Cloud Function will have a subscription to the topic and any message that is published to that Pub/Sub topic will result in an execution of our Cloud Function.

### Prerequisites

 -  You have a Google Cloud Platform account and a Google Project (note the Google Project Id).
 -  You have enabled the Google Cloud Functions API for the above project. To do that, go to the Cloud Console, click on the main menu, then APIs and Services --> Library. Type in Cloud Functions API and select + enable it.
 
## Configure your Project
First up, let's create an environment variable to store your Project Id. Please use the code snippet below to set the `PROJECT_ID` variable as given below:

```bash
export PROJECT_ID=<your_project_id>
```
Use gcloud to configure the current project
```bash
gcloud config set project $PROJECT_ID
```
 
## Study the index.js file

The Google Cloud Function is present in the `index.js` file. 
Click here: `walkthrough editor-open-file "googlecloudfunctions-training/hello-pubsub/index.js" "Open index.js"`

## Deploy the Function

First up, we should create our Pub/Sub topic as shown below:

```bash
gcloud pubsub topics create pubsubtopic1
```

We are ready to deploy our function

Use the gcloud command to deploy the function as shown below:

```bash
gcloud functions deploy subscribe --trigger-resource pubsubtopic1 --trigger-event google.pubsub.topic.publish  --region=us-central1 --runtime=nodejs6 
```

You should see an output that provides details on the function deployed. 

Check if the function has been deployed successfully via the following command:

```bash
gcloud functions list
```

## Invoke the Function

We are ready to invoke our function now: 

Use the gcloud command to publish a sample message to the topic :

```bash
gcloud pubsub topics publish pubsubtopic1 --message Hello
```

or 

```bash
gcloud functions call subscribe --data '{"data":"R29vZ2xlIENsb3VkIEZ1bmN0aW9ucw=="}'
```

You can view the execution of the function via the logs command as shown below:
```
gcloud functions logs read --limit=10
```

## Conclusion

`walkthrough conclusion-trophy`

Thanks for completing this tutorial.

### Next Steps:

 - Check out more information on [Google Cloud Functions](https://cloud.google.com/functions/) 
 - [HTTP Background Functions](https://cloud.google.com/functions/docs/writing/background)
