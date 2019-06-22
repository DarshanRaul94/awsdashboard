# AWS KONSOLE


## Architecture:

![Architecture](/images/konsolearch2.png)

# TODO:
- [ ] Comment all the code
- [x] remove the graphs until a working prototype is made
- [x] Add real api calls in the service's 
- [x] Test the api calls and 1. console log them  2. add them to functions and then display on screen
- [ ] Convert into FIREBASE app
- [ ] Add Gitlab CI for building
- [ ] add AWS amplify/Angular Fire authentication
- [ ] Add refresh button on Main Dashboard to refresh the counts
- [ ] S3
    - [x] Display no of buckets on Main Dashboard
    - [ ] Display public/private buckets
    - [ ] Should be able to view the bucket info
    - [x] Create Bucket working
    - [x] Delete Bucket working
- [ ] IAM
    - [x] No of Users/Roles/Groups on dashboard //ROLE API call error from backend
    - [ ] List/Create/Delete:
        - [ ] user
        - [ ] Group
        - [ ] Role
    
- [x] Building the code and deploying the app to S3
- [x] Adding script to deploy (build --prod && upload to S3 static website bucket ) for automating
- [x] Create JenkinsFile to Continously build and deploy the code to S3 bucket