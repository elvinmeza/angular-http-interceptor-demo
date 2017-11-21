import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	// constructor( INJECT YOUR AUTH SERVICE HERE )

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		console.log('New request intercepted: ', req);

		// get your authorization header from the service
		const authHeader = 'Bearer BLAHBLAHBLAHBLAH';

		const authReq = req.clone({setHeaders: {'Authorization': authHeader}});

		console.log('Modified request: ', authReq);

		return next.handle(authReq);
	}
}
