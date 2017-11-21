import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class RockBand {
	private rockBandsUrl = 'api/rockBands';

	constructor(private http: HttpClient) {
	}

	getRockBands(): Observable<RockBand[]> {
		return this.http.get<RockBand[]>(this.rockBandsUrl);
	}

}
