import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { JwtService } from "../../../services/jwt.service";

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [RouterLink, FormsModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: '../../../styles/reg_log.css'
})

export class AppRegister implements OnInit {

    registerForm: FormGroup | undefined;

    constructor(
        private service: JwtService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            firstName: ['', [Validators.required]],
            secondName: ['', [Validators.required]],
            birthday: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]],
        }, { validator: this.passwordMathValidator })
    }

    passwordMathValidator(formGroup: FormGroup) {
        const password = formGroup.get('password')?.value;
        const confirmPassword = formGroup.get('confirmPassword')?.value;

        if (password != confirmPassword) {
            formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
        } else {
            formGroup.get('confirmPassword')?.setErrors(null);
        }
    }

    onSubmit() {
        console.log(this.registerForm.value);
        this.service.register(this.registerForm.value).subscribe((response) => {
            console.log(response);
            this.router.navigateByUrl("/profile");
        });
    }

    // firstName: string = "";
    // secondName: string = "";
    // birthday: number = Date.now();
    // email: string = "";

    // password: string = "";
    // repeatPassword: string = "";

    acceptRules: boolean = false;
    keepLogin: boolean = false;

    rulesHandler() {
        this.acceptRules = !this.acceptRules;
    }

    keepLoginHandler() {
        this.keepLogin = !this.keepLogin;
    }

}