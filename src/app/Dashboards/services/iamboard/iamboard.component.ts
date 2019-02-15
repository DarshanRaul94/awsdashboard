import { Component, OnInit } from '@angular/core';
import { AwsconfigService } from '../../../Services/awsconfig.service';
@Component({
  selector: 'app-iamboard',
  templateUrl: './iamboard.component.html',
  styleUrls:['./iamboard.component.css']
})
export class IamboardComponent implements OnInit {

  constructor(private AwsconfigService: AwsconfigService) { }

  ngOnInit() {
  }
getusers(){
	
	
	this.AwsconfigService.createiamuser();
	
}
}
