import { Component, OnInit } from '@angular/core';
import { AwsconfigService } from '../../../Services/awsconfig.service';
@Component({
  selector: 'app-ec2board',
  templateUrl: './ec2board.component.html',
  styleUrls:['./ec2board.component.css']
})
export class Ec2boardComponent implements OnInit {

  constructor(private AwsconfigService: AwsconfigService) { }

  ngOnInit() {
  }

getservers(){


  this.AwsconfigService.getec2data();

}


}
