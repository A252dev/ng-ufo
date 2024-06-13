import { Routes } from '@angular/router';

import { AppHome } from "./components/pages/home/home.component";
import { AppLogin } from "./components/pages/login/login.component";
import { AppRegister } from './components/pages/register/register.component';

export const routes: Routes = [
    { path: "", component: AppHome },
    { path: "login", component: AppLogin },
    { path: "register", component: AppRegister }
];
