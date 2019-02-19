import { Component, OnInit } from '@angular/core';
import { AwsconfigService } from '../../../Services/awsconfig.service';

import {
	NgbModal,
	ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-rdsboard',
  templateUrl: './rdsboard.component.html'
  ,
  styleUrls:['./rdsboard.component.css']
})
export class RdsboardComponent implements OnInit {

  constructor(private AwsconfigService: AwsconfigService, private modalService: NgbModal) { }

  ngOnInit() {
  }

openCreateDatabase(content) {
		this.modalService.open(content, {
			centered: true,
			backdropClass: 'light-blue-backdrop'
		});
	}

createdatabases(){}
}
