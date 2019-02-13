import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent } from './Dashboards/main/main.component';
import { S3boardComponent } from './Dashboards/services/s3board/s3board.component';
import { IamboardComponent } from './Dashboards/services/iamboard/iamboard.component';
import { Ec2boardComponent } from './Dashboards/services/ec2board/ec2board.component';
import { CloudwatchboardComponent } from './Dashboards/services/cloudwatchboard/cloudwatchboard.component';
import { RdsboardComponent } from './Dashboards/services/rdsboard/rdsboard.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'S3board', component: S3boardComponent },
  { path: 'IAMboard', component: IamboardComponent },
  { path: 'EC2board', component: Ec2boardComponent },
  { path: 'RDSboard', component: RdsboardComponent },
  { path: 'CWboard', component: CloudwatchboardComponent },

  { path: '', redirectTo: '/main', pathMatch: 'full' },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}