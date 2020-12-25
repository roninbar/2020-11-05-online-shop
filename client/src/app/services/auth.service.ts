import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Log in.
   * @param username Username
   * @param password Password
   */
  public logInRx(username: string, password: string): Observable<void> {
    return this.http.post<void>('/api/auth/login', new HttpParams({ fromObject: { username, password } }));
  }

  /**
   * Log out.
   */
  public logOutRx(): Observable<void> {
    return this.http.post<void>('/api/auth/logout', null);
  }
}
