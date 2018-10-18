# Creating a Google Cloud Storage (GCS) trigger based Google Cloud Function (Background Functions)

## Creating a GCS Trigger Function
We shall create a simple Cloud Function that will get invoked in an asynchronous fashion when a file is uploaded to a specific bucket. 

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
Click here: `walkthrough editor-open-file "googlecloudfunctions-training/hello-gcs/index.js" "Open index.js"`

## Deploy the Function

First up, we should create our GCS bucket as shown below (if you get an error due to unique names requirements of GCS Bucket, please use a different name and use that in the subsequent commands):

```bash
gsutil mb gs://gcs-function-bucket1
```

We are ready to deploy our function

Use the gcloud command to deploy the function as shown below:

```bash
gcloud functions deploy helloGCSGeneric --trigger-resource gs://gcs-function-bucket1 --trigger-event google.storage.object.finalize  --region=us-central1 --runtime=nodejs6 
```

You should see an output that provides details on the function deployed. 

Check if the function has been deployed successfully via the following command:

```bash
gcloud functions list
```

## Invoke the Function

We are ready to invoke our function now: 

Use the gcloud command to upload a sample file from your local machine. In the example here, we are using a package.json file in my local folder. Please replace that name with a local file that you want to upload to the bucket.

```bash
gsutil cp package.json gs://gcs-function-bucket1/
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
