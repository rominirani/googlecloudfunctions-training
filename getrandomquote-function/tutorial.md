# Creating a HTTP Trigger based Google Cloud Function

## Creating a Random Quotes function
We shall create a Random Quotes function that will be directly triggered via a HTTP call and will give us a random quote from the 3 quotes that are present in the file. 

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
Click here: `walkthrough editor-open-file "googlecloudfunctions-training/getrandomquote-function/index.js" "Open index.js"`

## Deploy the Function

We are ready to deploy our function

Use the gcloud command to deploy the function as shown below:

```bash
gcloud beta functions deploy getRandomQuote --trigger-http
```

You should see an output that provides details on the function deployed. 

Check if the function has been deployed successfully via the following command:

```bash
gcloud beta functions list
```

## Invoke the Function

We are ready to invoke our function now: 

Use the gcloud command to invoke the function as shown below:

```bash
gcloud beta functions call getRandomQuote
```

You should see an output that provides a random quote.
```
executionId: 8h5wy99pg83i
result: '{"person":"Elanor Roosevelt","quote":"Great minds discuss ideas; average
  minds discuss events; small minds discuss people."}'```

## Conclusion

`walkthrough conclusion-trophy`

Thanks for completing this tutorial.

### Next Steps:

 - Check out more information on [Google Cloud Functions](https://cloud.google.com/functions/) 
 - [HTTP Trigger Functions](https://cloud.google.com/functions/docs/writing/http)

