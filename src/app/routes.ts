import { Routes } from '@angular/router';
import { UserComponent} from './user/user.component';
import { SignInComponent} from './user/sign-in/sign-in.component';
import { WorkAreaComponent } from './work-area/work-area.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    { path: '',redirectTo: '/login', pathMatch:'full'},
     
  {  path: 'login',component:UserComponent, children:[{ path: '' , component:SignInComponent}] },
   
   {path: 'workarea', component: WorkAreaComponent,canActivate:[AuthGuard]},
   
];