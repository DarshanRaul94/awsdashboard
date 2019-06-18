
/////////////////////////MODULES /////////////////////////////////

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

////////////////////////////////COMPONENTS////////////////////////////
import { CardComponent } from './components/card/card.component';
import { CircleComponent } from './components/circle/circle.component';
import { ButtonComponent } from './components/button/button.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { ConfigComponent } from './Actions/config/config.component';
import { MainComponent } from './Dashboards/main/main.component';
import { AppComponent } from './app.component';
import { S3boardComponent } from './Dashboards/services/s3board/s3board.component';
import { IamboardComponent } from './Dashboards/services/iamboard/iamboard.component';
import { Ec2boardComponent } from './Dashboards/services/ec2board/ec2board.component';
import { CloudwatchboardComponent } from './Dashboards/services/cloudwatchboard/cloudwatchboard.component';
import { RdsboardComponent } from './Dashboards/services/rdsboard/rdsboard.component';
import { CreateBucketComponent } from './Actions/S3/create-bucket/create-bucket.component';

/////////////////////////////SERVICES//////////////////////////
import { AwsconfigService } from './Services/awsconfig.service';




@NgModule({
  imports:      [ 
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule ,
  AppRoutingModule,
  HttpClientModule,
  NgbModule,///NGBOOTSTRAP
  //////MATERIAL ONES
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSnackBarModule,
  MatListModule

  ],
  declarations: [ // DECLARED ALL THE COMPONENTS HERE ( MAY CREATE SEPERATE MODULES LATER)
    AppComponent,
    CardComponent,
    ButtonComponent,
    MainComponent,
    S3boardComponent,
    IamboardComponent,
    Ec2boardComponent,
    CloudwatchboardComponent,
    RdsboardComponent,
    ConfigComponent,
    CircleComponent,
    PiechartComponent,
    CreateBucketComponent
   ]
 ,providers: [AwsconfigService],
  bootstrap:    [ AppComponent ]  // MADE APPCOMPONENT THE BOOTSTRAP MODULE
})

export class AppModule { 

  
}
