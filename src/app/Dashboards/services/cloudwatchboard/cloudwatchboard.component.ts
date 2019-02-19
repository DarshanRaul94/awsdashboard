import { Component, OnInit } from '@angular/core';
import { AwsconfigService } from '../../../Services/awsconfig.service';

import {
	NgbModal,
	ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cloudwatchboard',
  templateUrl: './cloudwatchboard.component.html',
  styleUrls:['./cloudwatchboard.component.css']
})
export class CloudwatchboardComponent implements OnInit {

  constructor( private AwsconfigService: AwsconfigService, private modalService: NgbModal) { }

  ngOnInit() {
  }
openCreateAlarm(content) {
		this.modalService.open(content, {
			centered: true,
			backdropClass: 'light-blue-backdrop'
		});
	}


createalarms(){

  
}
}
