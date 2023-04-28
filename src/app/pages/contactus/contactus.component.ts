import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})

export class ContactusComponent implements OnInit {
  title = 'MyShopApp';

  public addShopFormGroup!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addShopFormGroup = new FormGroup({
      shopName : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      shopAddress : new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
  }

  onSubmit(){
    alert("Suceess of Validation");
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addShopFormGroup.controls[controlName].hasError(errorName);
  }
}
