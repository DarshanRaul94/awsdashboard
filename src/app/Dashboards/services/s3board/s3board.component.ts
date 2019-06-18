import {
	Component,
	OnInit
} from '@angular/core';
import {
	AwsconfigService
} from '../../../Services/awsconfig.service';
import {
	Observable
} from "rxjs";
import {
	HttpClient
} from "@angular/common/http";
import {
	NgbModal,
	ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';

import {MatSnackBar} from '@angular/material';



var S3 =require('aws-sdk/clients/s3');
var s3 = new S3();

class Bucket {

	bucket: string;


}

@Component({
	selector: 'app-s3board',
	templateUrl: './s3board.component.html',
	styleUrls: ['./s3board.component.css']
})


export class S3boardComponent implements OnInit {

	buckets;

	bucketname: string;

 bucketlist:string[];
 bucketcount=this.AwsconfigService.bucketlist.length;

	constructor(private AwsconfigService: AwsconfigService, private http: HttpClient, private modalService: NgbModal,private snackBar: MatSnackBar) {}

	openmodal(content) {
   
		this.modalService.open(content, {
			centered: true,
			backdropClass: 'light-blue-backdrop'
		});
	}


	createbucket() {
console.log("clicked")

this.http.post(`http://127.0.0.1:8080/buckets?bucketname=${this.bucketname}`,
    {
     
    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });

        this.openSnackBar("Bucket"+this.bucketname+"created","close");
}

 openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }



	ngOnInit() {}




	getbuckets() {
     this.AwsconfigService.getbuckets();
     this.bucketlist=this.AwsconfigService.bucketlist;
// 	this.http.get(`http://127.0.0.1:8080/buckets/all`)
// 			.subscribe((data)=> {
        
			
  //this.bucketcount=this.bucketlist.length;

// this.bucketlist= data['buckets'];

// 			})


	

	}

  deletebuckets(deletebucketlist){

  
 for (let item of deletebucketlist){
   let  bucket=item._text.nativeElement.innerText;
   console.log(bucket);
  this.AwsconfigService.deletebuckets(bucket);
  // this.http.delete(`https://2f7wrz7c6b.execute-api.ap-south-1.amazonaws.com/dev/s3/buckets/${bucket}`,
  // //this.http.delete(`http://127.0.0.1:8080/buckets?bucketname=${bucket}  
  // {
     
  //   })
  //   .subscribe(
  //       (val) => {
  //           console.log("DELETE call successful value returned in body", 
  //                       val);
  //       },
  //       response => {
  //           console.log("DELETE call in error", response);
  //       },
  //       () => {
  //           console.log("The DELETE observable is now completed.");
  //       });
  }
console.log(deletebucketlist);
  }
}
