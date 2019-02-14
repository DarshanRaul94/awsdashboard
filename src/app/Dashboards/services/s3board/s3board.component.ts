import { Component, OnInit } from '@angular/core';
import { AwsconfigService } from '../../../Services/awsconfig.service';
@Component({
  selector: 'app-s3board',
  templateUrl: './s3board.component.html',
  styleUrls:['./s3board.component.css']
})
export class S3boardComponent implements OnInit {

  constructor(private AwsconfigService: AwsconfigService) { }

  ngOnInit() {
  }

getbuckets(){


  //this.AwsconfigService.getbucketdata();

}
}
