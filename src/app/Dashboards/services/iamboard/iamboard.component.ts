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

  constructor(private AwsconfigService: AwsconfigService, private modalService: NgbModal) { 
this.AwsconfigService.getusers();
this.AwsconfigService.getgroups();
this.AwsconfigService.getroles();


  }

  ngOnInit() {
  }
  users;

	username: string;
	groupname: string;
 userlist:string[]=this.AwsconfigService.userlist;
 grouplist:string[]=this.AwsconfigService.grouplist;
 rolelist:string[];

 usercount=this.AwsconfigService.userlist.length;
 groupcount=this.AwsconfigService.grouplist.length;
 rolecount=this.AwsconfigService.rolelist.length;



 createusers() {
    
  this.AwsconfigService.createuser({ "user_name": this.username });
  
// this.openSnackBar("Bucket"+this.bucketname+"created","close");
}

creategroups() {
    
  this.AwsconfigService.creategroup({ "group_name": this.groupname });
  
// this.openSnackBar("Bucket"+this.bucketname+"created","close");
}

deleteusers(deleteuserlist){

  
  for (let item of deleteuserlist){
    let  user=item._text.nativeElement.innerText;
    console.log(user);
    this.AwsconfigService.deleteusers(user);
   }
 console.log(deleteuserlist);
   }


   deletegroups(deletegrouplist){

  
    for (let item of deletegrouplist){
      let  group=item._text.nativeElement.innerText;
      console.log(group);
      this.AwsconfigService.deletegroups(group);
     }
   console.log(deletegrouplist);
     }
  
  


  openmodal(content) {
   
		this.modalService.open(content, {
			centered: true,
			backdropClass: 'light-blue-backdrop'
		});
	}

}
