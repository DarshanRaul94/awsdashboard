import { Component, OnInit } from '@angular/core';
import { AwsconfigService } from '../../../Services/awsconfig.service';
import {
	NgbModal,
	ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ec2board',
  templateUrl: './ec2board.component.html',
  styleUrls:['./ec2board.component.css']
})
export class Ec2boardComponent implements OnInit {

keypair:any;
count:any;

constructor(private AwsconfigService: AwsconfigService, private modalService: NgbModal) { }

  ngOnInit() {
  }

// createservers(){


// this.AwsconfigService.createec2server(this.keypair,this.count);

// }

openCreateInstance(content) {
		this.modalService.open(content, {
			centered: true,
			backdropClass: 'light-blue-backdrop'
		});
	}

}
