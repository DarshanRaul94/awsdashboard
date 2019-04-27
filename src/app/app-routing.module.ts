// MAIN ROUTING MODULE



import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//IMPORT ALL THE COMPONENTS 

//MAIN ONE
import { MainComponent } from './Dashboards/main/main.component'; 

//SERVICE BASED COMPONENTS
import { S3boardComponent } from './Dashboards/services/s3board/s3board.component';
import { IamboardComponent } from './Dashboards/services/iamboard/iamboard.component';
import { Ec2boardComponent } from './Dashboards/services/ec2board/ec2board.component';
import { CloudwatchboardComponent } from './Dashboards/services/cloudwatchboard/cloudwatchboard.component';
import { RdsboardComponent } from './Dashboards/services/rdsboard/rdsboard.component';

//TRIAL
import { CreateBucketComponent } from './Actions/S3/create-bucket/create-bucket.component';


//INITIALIZE THE ROUTES AND ASSIGN TO RESPECTIVE PATHS
const routes: Routes = [
  { path: 'main', component: MainComponent },///////MAIN DASHBOARD
  { path: 'S3board', component: S3boardComponent },
  { path: 'IAMboard', component: IamboardComponent },
  { path: 'EC2board', component: Ec2boardComponent },
  { path: 'RDSboard', component: RdsboardComponent },
  { path: 'CWboard', component: CloudwatchboardComponent },
  { path: 'S3/CreateBucket', component: CreateBucketComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }, //////DEFAULT ROUTE TO MAIN 
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ], ////SET IN ROOT 
})

export class AppRoutingModule {

// NOTHING GOES HERE >. YET

}