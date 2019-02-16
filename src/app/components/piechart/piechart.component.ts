import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html'
  
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    let chart = new CanvasJS.Chart("chartContainer", {

		theme: "light2",
		animationEnabled: false,
		exportEnabled: false,
		
		data: [{
			type: "pie",
			showInLegend: false,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			dataPoints: [
				{ y: 450, name: "EC2" },
				{ y: 120, name: "S3" },
				{ y: 300, name: "Lambda" },
				{ y: 800, name: "IAM" },
				
			]
		}]
	});
		
	chart.render();

  }

}
