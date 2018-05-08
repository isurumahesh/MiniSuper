import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'bearer ' +
      localStorage.getItem('id_token'));
  }

  get(url) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  postFiles(url, data) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'bearer ' +
      localStorage.getItem('id_token'));

    return this.http.post(url, data, {
      headers: headers
    });
  }


  put(url, data) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers: headers
    });
  }

  patch(url, data) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.patch(url, data, {
      headers: headers
    });
  }

  delete(url) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    });
  }

}