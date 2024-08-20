import { Routes } from '@angular/router';

// Импорты

import { AppHome } from "./components/pages/home/home.component";

import { UserAgreements } from './components/pages/user_agreement/user_agreement.component';

import { AppLogin } from "./components/pages/login/login.component";
import { AppRegister } from './components/pages/register/register.component';
import { PrivacyPolicy } from './components/pages/privacy_policy/privacy_policy.component';
import { DataProtection } from './components/pages/data_protection/data_protection.component';
import { Profile } from './components/pages/profile/profile.component';
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
