import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/empolyer.model';
import {Router} from '@angular/router';
import {EmpolyeeService} from '../../service/empolyee.service';

@Component({
  selector: 'app-create-empolyer',
  templateUrl: './create-empolyer.component.html',
  styleUrls: ['./create-empolyer.component.css']
})
export class CreateEmpolyerComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmpolyeeService,
              private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.router.navigate(['/employees']);
  }

}
