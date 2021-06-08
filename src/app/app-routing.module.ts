import { NgModule } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';    
import { DashboardComponent } from './dashboard/dashboard.component';       
import { RegisterComponent } from './register/register.component';    
    
    
export const routes: Routes = [    
  {    
    path: '',    
    redirectTo: 'Dashboard',    
    pathMatch: 'full'    
  },    
  {    
    path: 'Dashboard',    
    component: DashboardComponent,    
    data: {    
      title: 'Dashboard Page'    
    }    
  },    
  {    
    path: 'AddUser',    
    component: RegisterComponent,    
    data: {    
      title: 'Add User Page'    
    }    
  }  
];    
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }   