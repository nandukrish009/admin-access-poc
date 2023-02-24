import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiurl =
    'https://ap-south-1.aws.data.mongodb-api.com/app/rage-api-ewhwq/endpoint/react/user';

  RegisterUser(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  GetUserbyCode(id: any) {
    return this.http.get(this.apiurl + '?id=' + id);
  }
  Getall() {
    return this.http.get(this.apiurl + '/getall');
  }
  updateuser(id: any, inputdata: any) {
    return this.http.put(this.apiurl + '?id=' + id, inputdata);
  }
  getuserrole() {
    return this.http.get(
      'https://ap-south-1.aws.data.mongodb-api.com/app/rage-api-ewhwq/endpoint/role'
    );
  }
  isloggedin() {
    return sessionStorage.getItem('username') != null;
  }
  getrole() {
    return sessionStorage.getItem('role') != null
      ? sessionStorage.getItem('role')?.toString()
      : '';
  }
  // GetAllCustomer() {
  //   return this.http.get('http://localhost:3000/customer');
  // }
  // Getaccessbyrole(role: any, menu: any) {
  //   return this.http.get(
  //     'http://localhost:3000/roleaccess?role=' + role + '&menu=' + menu
  //   );
  // }
}
