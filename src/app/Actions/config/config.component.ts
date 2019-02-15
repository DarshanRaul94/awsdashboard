import { Component, OnInit } from '@angular/core';
import { AwsconfigService } from '../../Services/awsconfig.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
accesskey:string 
region:string 
secretaccesskey:string 

  constructor(private AwsconfigService: AwsconfigService) { }

  ngOnInit() {
  }




setconfig(){
	
	
	this.AwsconfigService.AccessKey=this.accesskey;
	this.AwsconfigService.SecretAccessKey=this.secretaccesskey;
	this.AwsconfigService.Region=this.region;
	this.AwsconfigService.setconfig(true);
	console.log("clicked");
	
}
}
