import { Injectable } from '@angular/core';
import { Http, RequestMethod, RequestOptions, Headers, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { map } from "rxjs/operators";

@Injectable()
export class AppointmentService {

  constructor(private http: Http) { }


  getAppointmentResults(): Observable<any> {
    let url = environment.AppointmentUrl + "api/Appointment";

    let headers = new Headers();
    headers.append("content-type", "application/json");
    headers.append("accept", "application/json");

    let requestOption = new RequestOptions({
      headers: headers,
      method: RequestMethod.Get,
      url: url,
      body: null

    });

    let req = new Request(requestOption);

    return this.http.request(req).pipe(map((res: Response) => {
      return res.json()
    }));
  }


}
