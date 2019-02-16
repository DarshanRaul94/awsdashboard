import { Component, OnInit } from '@angular/core';
import { AwsconfigService } from '../../../Services/awsconfig.service';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

class  Bucket {

bucket:string;


}

@Component({
  selector: 'app-s3board',
  templateUrl: './s3board.component.html',
  styleUrls:['./s3board.component.css']
})


export class S3boardComponent implements OnInit {
buckets;



  constructor(private AwsconfigService: AwsconfigService,private http: HttpClient) { }

  ngOnInit() {



   this.buckets= this.http

.get("https://8uvg5oovdj.execute-api.ap-south-1.amazonaws.com/dev/buckets");




  }

getbuckets(){


  console.log(this.buckets);

}
}
