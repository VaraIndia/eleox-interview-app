import { Routes,CanActivateFn } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';


// Protect routes using a Guard
const authGuard: CanActivateFn = () => {
  return !!localStorage.getItem('auth_token'); // Only allow access if token exists
};

export const routes: Routes = [
  { path: '', component: LoginComponent }, //  Default route (Login Page)
  { path: 'people', component: PeopleListComponent }, // People List Page
  { path: 'people/:id', component: PersonDetailComponent }, // Person Details Page
  { path: 'create-person', component: CreatePersonComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' } //  Redirect unknown routes to login
];
