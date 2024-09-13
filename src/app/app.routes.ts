import { Routes } from '@angular/router';

// Импорты

import { AppHome } from "./pages/home/home.component";

import { UserAgreements } from './pages/user_agreement/user_agreement.component';

import { AppLogin } from "./pages/login/login.component";
import { AppRegister } from './pages/register/register.component';
import { PrivacyPolicy } from './pages/privacy_policy/privacy_policy.component';
import { DataProtection } from './pages/data_protection/data_protection.component';
import { Profile } from './pages/profile/profile.component';
import { AppLayout } from './components/layout/index/layout.component';

export const routes: Routes = [

    // Ссылки для всех страниц
    
    { path: "", component: AppLayout },

    { path: "user_agreement", component: UserAgreements },
    { path: "privacy_policy", component: PrivacyPolicy },
    { path: "data_protection", component: DataProtection },


    { path: "login", component: AppLogin },
    { path: "register", component: AppRegister },
    { path: "profile", component: Profile },
        
];
