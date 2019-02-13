import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css','./app.component2.css' ]
})
export class AppComponent  {
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
