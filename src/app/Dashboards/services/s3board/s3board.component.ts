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

		console.log(this.bucketname);

	}


	ngOnInit() {}

	getbuckets() {
	this.buckets = this.http

			.get("https://8uvg5oovdj.execute-api.ap-south-1.amazonaws.com/dev/buckets");


	console.log(this.buckets);

	}
}