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




	constructor(private AwsconfigService: AwsconfigService, private http: HttpClient, private modalService: NgbModal) {}

	openCreateBucket(content) {
		this.modalService.open(content, {
			centered: true,
			backdropClass: 'light-blue-backdrop'
		});
	}


	createbucket() {
console.log("clicked")

this.http.post("http://127.0.0.1:8080/buckets/"+this.bucketname,
    {
      "name": "morpheus",
      "job": "leader"
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
}






	ngOnInit() {}

	getbuckets() {
	this.buckets = this.http

			.get("https://8uvg5oovdj.execute-api.ap-south-1.amazonaws.com/dev/buckets");


	console.log(this.buckets);

	}
}
