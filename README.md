# Getting Started with Firebase File Upload

To add Firebase file upload to your capstone, you will need to set-up a firebase account, create an app in the firebase account, and connect your capstone to the firebase app.

## Firebase Steps

1. Go to firebase.com and create/sign into an account.  You will need a gmail account to do this.
1. Click the "Add Project" button
1. Give the project a name and click continue
1. Click Continue
1. Choose the Default Account for Firebase on the Configure Google Analytics and click "Create Project".  This will take you to the project dashboard.
1. At the top of the project dashboard, click "Add App".  Then select the </> (Web) option. Name the app and click "Register app".  This will take you to a page with your app's credentials.  
    You can also get to the credentials under Project Settings - General (scroll down a bit).
1. From your Firebase dashboard, click on Storage then "Get Started" 
    - a "Set up Cloud Storage" modal will appear.  Make sure that the settings are:

      ```
        rules_version = '2';
        service firebase.storage {
          match /b/{bucket}/o {
            match /{allPaths=**} {
              allow read, write: if true;
            }
          }
        }
      ```
    - If you are returning, you can click on the "Rules" tab to edit the rules

    *NOTE: These settings allow anyone to access your bucket and should not be used in a production environment.

## Add Template Code to your Capstone

1. Set-up environment variables
    - Add a file named `.env` to your root directory (if you have not already done so)
    - Add `.env` to the `.gitignore` file (if you have not already done so)
    - Add the following with your Firebase credentials to the `.env` file

        ```
          REACT_APP_FB_apiKey={{YOUR VALUE}}
          REACT_APP_FB_authDomain={{YOUR VALUE}}
          REACT_APP_FB_projectId={{YOUR VALUE}}
          REACT_APP_FB_storageBucket={{YOUR VALUE}}
          REACT_APP_FB_messagingSenderId={{YOUR VALUE}}
          REACT_APP_FB_appId=1:{{YOUR VALUE}}9
          REACT_APP_FB_measurementId={{YOUR VALUE}}

        ```
1. Add the templates to your project
    - Add the firebase.js and FileUploader.js files your project

1. Incorporate the template into your project
    In the component in which you would like to upload a file you need to:
    - Import the FileUploader component
    - Create a useState hook for storing the uploaded url
    - Add `<FileUploader setFileUrl={setFileUrl} />` to your code where `{setFileUrl}` contains the set function for your url hook.
1. Test that you can upload a file.  
    - there should be no errors in your dev tools console
    - you should see the file in your Firebase app under storage/files
    - use React dev tool to check that the `filrUrl` useState hook is set with the url to the file
1. Refactor to fit your app's style and needs.
