import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css','./main.component2.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



name = 'Angular';


  
noofbuckets(){
return 12;


}
noofusers(){
  return 24;
}

noofinstances(){
  return 2;
}
noofalarms(){
  return 2;
}
noofdatabases(){
  return 6;
}
}
