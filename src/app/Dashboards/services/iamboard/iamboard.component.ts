import { Component, OnInit } from '@angular/core';
import { AwsconfigService } from '../../../Services/awsconfig.service';

import {
	NgbModal,
	ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-iamboard',
  templateUrl: './iamboard.component.html',
  styleUrls:['./iamboard.component.css']
})
export class IamboardComponent implements OnInit {

  constructor(private AwsconfigService: AwsconfigService, private modalService: NgbModal) { }

  ngOnInit() {
  }
  users;

	username: string;

 userlist:string[];
 usercount=this.AwsconfigService.userlist.length;













// getusers(){
	
	
// 	this.AwsconfigService.createiamuser();
	
// }

// openCreateUser(content) {
// 		this.modalService.open(content, {
// 			centered: true,
// 			backdropClass: 'light-blue-backdrop'
// 		});
// 	}

//   createusers(){



//   }
}
