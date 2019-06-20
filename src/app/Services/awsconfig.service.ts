//MAIN SERVICE FOR SAVING AWS END CONFIGURATIONS

import {
	Injectable
} from '@angular/core';
import {
	Observable,
	of
} from 'rxjs';
import {
	BehaviorSubject
} from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

/* When using the AWS JS sdk. Not using anymore
const env = require('../config/aws.env.js');
var AWS = require('aws-sdk');
var IAM = require('aws-sdk/clients/iam');

var S3 = require('aws-sdk/clients/s3');
*/
//AWS.config.update({"accessKeyId": env.AWS_ACCESS_KEY, "secretAccessKey": env.AWS_SECRET_ACCESS_KEY, "region": env.REGION});

@Injectable({
	providedIn: 'root'
})


export class AwsconfigService {


///////////////////S3 
	bucketlist: string[] = [];
	userlist: string[] = [];
	grouplist: string[] = [];
	rolelist: string[] = [];

    getbuckets() {
		/*
     	* This function is used to get the buckets data from backend API
     	*/

        this.getbucketData().subscribe((result) => {
            this.bucketlist = result['buckets'];
            console.log(this.bucketlist);
        }, (error) => {
            console.log(error);
        });

    }


	deletebuckets(bucket){
		
		this.deletebucketData(bucket).subscribe((result) => {
            
            console.log(bucket);
        }, (error) => {
            console.log(error);
        });


	}
	createbucket(data: any){
		
		this.createbucketData(data).subscribe((result) => {
            
            
        }, (error) => {
            console.log(error);
        });


	}
    getbucketData() {
        let headers = this.createRequestHeader();
        return this.http.get('https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/s3/buckets', { headers: headers });
    }

	deletebucketData(bucket) {
		
		let headers = this.createRequestHeader();
		let url="https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/s3/buckets/"+bucket
        return this.http.delete(url, { headers: headers });
	}
	createbucketData(data: any) {
		
		let headers = this.createRequestHeader();
		let url="https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/s3/buckets/"
        return this.http.post(url, JSON.stringify(data), { headers: headers });
	}
	
    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({

            "Content-Type": "application/json",
            "profile": this.Profile
        });

        return headers;
	}
///////////////////////IAM


getusers() {
	/*
	 * This function is used to get the users data from backend API
	 */

	this.getusersData().subscribe((result) => {
		this.userlist = result['users'];
		console.log(this.userlist);
	}, (error) => {
		console.log(error);
	});

}
getusersData() {
	let headers = this.createRequestHeader();
	return this.http.get('https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/iam/users', { headers: headers });
}
getgroups() {
	/*
	 * This function is used to get the groups data from backend API
	 */

	this.getgroupsData().subscribe((result) => {
		this.grouplist = result['groups'];
		console.log(this.grouplist);
	}, (error) => {
		console.log(error);
	});

}
getgroupsData() {
	let headers = this.createRequestHeader();
	return this.http.get('https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/iam/groups', { headers: headers });
}
getroles() {
	/*
	 * This function is used to get the roles data from backend API
	 */

	this.getrolesData().subscribe((result) => {
		this.rolelist = result['roles'];
		console.log(this.rolelist);
	}, (error) => {
		console.log(error);
	});

}
getrolesData() {
	let headers = this.createRequestHeader();
	return this.http.get('https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/iam/roles', { headers: headers });
}

createuser(data: any){
		
	this.createuserData(data).subscribe((result) => {
		
		
	}, (error) => {
		console.log(error);
	});


}
createuserData(data: any) {
		
	let headers = this.createRequestHeader();
	let url="https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/iam/users"
	return this.http.post(url, JSON.stringify(data), { headers: headers });
}

creategroup(data: any){
		
	this.creategroupData(data).subscribe((result) => {
		
		
	}, (error) => {
		console.log(error);
	});


}
creategroupData(data: any) {
		
	let headers = this.createRequestHeader();
	let url="https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/iam/groups"
	return this.http.post(url, JSON.stringify(data), { headers: headers });
}



deleteusers(user){
		
	this.deleteuserData(user).subscribe((result) => {
		
		console.log(user);
	}, (error) => {
		console.log(error);
	});


}

deleteuserData(user) {
		
	let headers = this.createRequestHeader();
	let url="https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/iam/users/"+user
	return this.http.delete(url, { headers: headers });
}


deletegroups(group){
		
	this.deletegroupData(group).subscribe((result) => {
		
		console.log(group);
	}, (error) => {
		console.log(error);
	});


}

deletegroupData(group) {
		
	let headers = this.createRequestHeader();
	let url="https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/iam/groups/"+group
	return this.http.delete(url, { headers: headers });
}






	AccessKey = "";
	SecretAccessKey = "";
	Region = "";
	Profile="";
	awsconfig: BehaviorSubject < boolean > ;

	constructor(private http: HttpClient) {
		this.awsconfig = new BehaviorSubject < boolean > (false);
	}

	//config = false;



	public getconfig(): Observable < boolean > {
		return this.awsconfig.asObservable();

	}

	public setconfig(newValue: boolean): void {
		this.awsconfig.next(newValue);
		
	}





	// getiamusers() {


	// 	var iam = new IAM();

	// 	var params = {};
	// 	iam.listUsers(params, function (err, data) {
	// 		if (err) console.log(err, err.stack); // an error occurred
	// 		else console.log(data); // successful response

	// 	});
	// }


	// createiamuser() {
	// 	var iam = new IAM();
	// 	var params = {
	// 		UserName: "Bob"
	// 	};
	// 	iam.createUser(params, function (err, data) {
	// 		if (err) console.log(err, err.stack); // an error occurred
	// 		else console.log(data); // successful response
	// 		/*
	// 		data = {
	// 		 User: {
	// 		  Arn: "arn:aws:iam::123456789012:user/Bob", 
	// 		  CreateDate: <Date Representation>, 
	// 		  Path: "/", 
	// 		  UserId: "AKIAIOSFODNN7EXAMPLE", 
	// 		  UserName: "Bob"
	// 		 }
	// 		}
	// 		*/
	// 	});
	// }

	// create3bucket(bucketname) {
	// 	var s3 = new S3();
	// 	var params = {
	// 		Bucket: bucketname
	// 	};

	// 	s3.createBucket(params, function (err, data) {
	// 		if (err) console.log(err, err.stack); // an error occurred
	// 		else console.log(data); // successful response

	// 	});

	// 	console.log(bucketname);


	// }


	// createec2server(keypair, count) {//////////////////WORKING////////////////////////////
		
	// 	var EC2 = require('aws-sdk/clients/ec2');
	// 	var ec2 = new AWS.EC2();

	// 	var params = {

	// 		ImageId: "ami-0d773a3b7bb2bb1c1",
	// 		InstanceType: "t2.micro",
	// 		KeyName: keypair,
	// 		MaxCount: count,
	// 		MinCount: count,

	// 	};
	// 	ec2.runInstances(params, function (err, data) {
	// 		if (err) console.log(err, err.stack); // an error occurred
	// 		else console.log(data); // successful response
	// 		/*
	// 		data = {
	// 		}
	// 		*/
	// 	});

	// }


}