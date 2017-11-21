import { Component, OnInit } from '@angular/core';
import { RockBand } from './services/rock-bands.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	rockBands: RockBand[];

	constructor(private rockBandService: RockBand) {}

	ngOnInit() {
		this.getRockBands();
	}

	getRockBands() {
		this.rockBandService.getRockBands()
		.subscribe((response) => {
			this.rockBands = response;
		});
	}
}
