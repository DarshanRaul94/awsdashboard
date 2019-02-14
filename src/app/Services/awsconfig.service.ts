import { Injectable } from '@angular/core';
import AWS = require('aws-sdk');
AWS.config.region = 'ap-south-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: '',
});
var s3 = new AWS.S3();
var ec2 = new AWS.EC2();
@Injectable({
  providedIn: 'root'
})


export class AwsconfigService {

  constructor() { }

getbucketdata():void{

    s3.listBuckets(function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
}

getec2data():void {
              var params = {
                Filters: [
                  {
                  Name: "instance-type", 
                  Values: [
                    "t2.micro"
                  ]
                }
                ]
              };
                ec2.describeInstances(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else     console.log(data);           // successful response
                /*
                data = {
                }
                */
              });
}



}
