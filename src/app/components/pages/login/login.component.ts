import { Component, Output } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { JwtService } from "../../../services/jwt.service";
import { AppHeader } from "../../layout/header/header.component";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, FormsModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: '../../../styles/reg_log.css'
})

export class AppLogin {

    loginForm: FormGroup | undefined;

    constructor(
        private service: JwtService,
        private fb: FormBuilder,
        private router: Router,
    ) { 
        
    }

    ngOnInit(): void {

        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        })

    }

    login_text: string;
    
    testLog() {
        console.log("log...");
        const navigation = this.router.getCurrentNavigation();

        console.log(navigation);
        console.log(this.router.url);
    }

    onSubmit() {
        console.log(this.loginForm.value);

        this.service.login(this.loginForm.value).subscribe((response) => {
            if (response.token != null) {
                console.log('Your JWT token is: ' + response.token);
                const jwtToken = response.token;
                localStorage.setItem('jwt', jwtToken);
                this.router.navigateByUrl("/profile");
            } else {
                console.log("JWT is null!");
            }
        });
    }

}