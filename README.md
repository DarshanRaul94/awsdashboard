
<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="/images/awskonsole.png" alt="Project logo"></a>
</p>

<h3 align="center">AWS Konsole</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
 
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Angular 7 Web application to interact with AWS Services. Backend is served by AWS API Gateway+AWS Lambda. Authentication using Google Firebase.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Architecture](#architecture)
- [Built Using](#built_using)
- [TODO](#todo)


## 🧐 About <a name = "about"></a>
- This is part of a bigger project of creating a unified platform to interact with AWS services from a various interfaces (WEB,MOBILE,CLI,VOICE) 
- Angular 7 Web application to interact with AWS Services. Backend is served by AWS API Gateway+AWS Lambda. Authentication using Google Firebase.
- Still in the works. Should be completed by year end as I am commiting consistently but once a week.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them.

- Node Js & npm [Windows](https://www.guru99.com/download-install-node-js.html) [Ubuntu](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/)
- Angular 7  ```npm install -g @angular/cli  ```
- Git ```apt install -y git```


### Installing
A step by step series of examples that tell you how to get a development env running.

- Clone the project
    ```
    git clone https://github.com/darshan-raul/awsdashboard.git
    ```
- Change the directory to project directory
    ```
    cd awsdashboard
    ```
- Install all the dependencies
    ```
    npm install
    ```
- Run on localhost
    ```
    ng serve
    ```
- Go to http://localhost:4200




## 🎈 Architecture <a name="architecture"></a>
![Architecture](/images/konsolearch2.png)

## 🚀 Deployment <a name = "deployment"></a>
- Build the code for production ``` npm build --prod```
- Create a S3 static website bucket. [Steps](https://medium.com/@kyle.galbraith/how-to-host-a-website-on-s3-without-getting-lost-in-the-sea-e2b82aa6cd38)
- Copy the contents of /dist folder to the S3 bucket Either through AWS Console,SDK or CLI.
- Go to the S3 website endpoint. The app should be working seamlessly.
[Steps to Automate the deployment](https://cloudforte.wordpress.com/2019/06/22/ci-cd-on-aws-dashboard-web-app-using-jenkins/)

## ⛏️ Built Using <a name = "built_using"></a>
- [Angular 7](https://angular.io/) - Web Framework
- [Node Js](https://nodejs.org/en/) - Server Runtime
- [Python](https://www.python.org/) - Backend
- [Firebase](https://firebase.google.com/) - Authentication

# TODO a name = "todo"></a>
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
