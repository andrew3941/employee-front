import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpolyerComponent } from './empolyer/create-empolyer/create-empolyer.component';
import {ListEmpolyeeComponent} from './empolyer/list-empolyee/list-empolyee.component';
import {UpdateEmpolyeeComponent} from './empolyer/update-empolyee/update-empolyee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'add', component: CreateEmpolyerComponent },
  { path: 'employees', component: ListEmpolyeeComponent },
  { path: 'update/:id', component: UpdateEmpolyeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
