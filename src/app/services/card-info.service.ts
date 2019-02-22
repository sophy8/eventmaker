import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

const url = 'https://www.eventbriteapi.com/v3/events/?token=PHAEVELDQ4EY4SNTP4UJ';
// https://www.eventbriteapi.com/v3/users/me/events/   -H 'Authorization: Bearer PERSONAL_OAUTH_TOKEN' 

@Injectable({
  providedIn: 'root'
})
export class CardInfoService {
  API_URL: string = '/api/';
  constructor(private http: HttpClient) { }
  getEvent() {
    return this.http.get(this.API_URL+'card').pipe(
      tap((res) => {
        console.log(res);
      }),
      catchError((res) => {
        throw new Error(res);
      })
    );
  }
}
