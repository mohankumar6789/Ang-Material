import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isloading: boolean = false;
  formGroupName: any = new FormGroup({});
  constructor(private router: Router, private authservice: AuthService) { }
  ngOnInit(): void {
    this.formGroupName = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }
  onsubmit() {
    this.authservice.login(this.formGroupName.value.email, this.formGroupName.value.password).subscribe((data) => {
      if(data){
        this.isloading = true;
        setTimeout(() => {
          this.router.navigate(['blog-page'])
        }, 2000);
      }
    })
  }
}

