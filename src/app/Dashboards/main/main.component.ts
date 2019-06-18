
//THE MAIN DASHBOARD COMPONENTS 

//HERE IS WHERE ALL THE SUMMARY DATA WILL BE VISIBLE



import {
	Component,
	OnInit
} from '@angular/core';

import * as CanvasJS from './canvasjs.min';

import {
	AwsconfigService
} from '../../Services/awsconfig.service';

import {
	Observable,
} from 'rxjs';


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css', './main.component2.css']
})


export class MainComponent implements OnInit {


	constructor(private AwsconfigService: AwsconfigService) {}

	config: boolean;


	ngOnInit() {

		this.AwsconfigService.getconfig().subscribe(config => this.config = config);
		this.AwsconfigService.getbuckets();

	}

//////LATER THIS WILL BE RUNNING EVERY 1 MIN AND FETCHING DATA AND SHOWING DYNAMIC DATA

// THIS FUNCTIONS WILL GET THE DATA FROM THE SERVICE API CALLS AND DISPLAY DATA (NUMBERS EG: NO OF BUCKETS ETC)

	noofbuckets() {
		return this.AwsconfigService.bucketlist.length;
	}
	noofusers() {
		return 24;
	}

	noofinstances() {
		return 2;
	}
	noofalarms() {
		return 2;
	}
	noofdatabases() {
		return 6;
	}

}