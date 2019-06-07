
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }
  username: string;
  password: string;
  ngOnInit() {
    // console.log("sfasfsafs")
    // this.http.get('http://localhost:4000/user/get_by_id/9c7ff708-37bb-4993-84d7-e7538a00adb0')
  }
  login(): void {
    // if (this.username == 'admin' && this.password == 'admin') {
    //   this.router.navigate(["user"]);
    // } else {
    //   alert("Invalid credentials");
    // }


    // let body = {
    //   'email': "lecuong09ck12@gmail.com",
    //   'password': "12345"
    // }
    // this.http.post('http://localhost:4000/auth/login', body).subscribe((data: any) => {
    //   console.log(data)
    // }, error => console.log(error)
    // )

    this.http.get('https://smarthomedev-webap.herokuapp.com/user/get_by_id/9c7ff708-37bb-4993-84d7-e7538a00adb0').subscribe(data =>
      console.log(data)
    )
    // console.log("asdfsfsf" + JSON.stringify(body))
  }
}
