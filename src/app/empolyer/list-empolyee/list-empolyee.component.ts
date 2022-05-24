import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../model/api.respone';
import {Router} from '@angular/router';
import {EmpolyeeService} from '../../service/empolyee.service';

@Component({
  selector: 'app-list-empolyee',
  templateUrl: './list-empolyee.component.html',
  styleUrls: ['./list-empolyee.component.css']
})
export class ListEmpolyeeComponent implements OnInit {
  employees: Observable<ApiResponse>;
  constructor(private employeeService: EmpolyeeService,
              private router: Router) {
    // setTimeout(function(){
    //   $(function(){
    //     $('#example').DataTable();
    //   });
    // },2000);

  }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    // setTimeout(function(){
    //   $(function(){
    //     $('#example').DataTable();
    //   });
    // },2000);

  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          // console.log(data);
          this.employees = this.employeeService.getEmployees();
        },
        error => console.log(error));
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }


}
