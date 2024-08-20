import { NgClass } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { JwtService } from "../../../services/jwt.service";
import { routes } from "../../../app.routes";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActionService } from "../../../services/action.service";

@Component({
    selector: 'profile-page',
    standalone: true,
    imports: [
        NgClass, FormsModule, ReactiveFormsModule
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})

export class Profile implements OnInit {

    constructor(private service: JwtService,
        private router: Router,
        private fb: FormBuilder,
        private action: ActionService
    ) { }

    transferForm: FormGroup | undefined;

    ngOnInit(): void {

        if (localStorage.getItem('jwt') == null) {
            this.router.navigateByUrl("login");
        }

        this.profile();
    }

    title: string = null;
    firstName: string = null;
    secondName: string = null;
    email: string = null;
    birthday: string = null;

    balance_usd: number = null;
    balance_eur: number = null;
    balance_rub: number = null;

    profile() {

        this.transferForm = this.fb.group({
            toEmail: ['', [Validators.required, Validators.email]],
            summa: ['', [Validators.required]],
            currency: ['', [Validators.required]],
        })

        this.service.profile().subscribe(
            (response) => {
                console.log(response);
                this.title = response.info[0].title;
                this.firstName = response.info[0].firstName;
                this.secondName = response.info[0].secondName;
                this.email = response.info[0].email;
                this.birthday = response.info[0].birthday;

                this.balance_usd = response.info[1].balance_usd;
                this.balance_eur = response.info[1].balance_eur;
                this.balance_rub = response.info[1].balance_rub;
            }
        )
    }

    transferSubmit() {
        console.log(this.transferForm.value);
        this.action.transfer(this.transferForm.value).subscribe((response) => {
            console.log("Transfer to " + response.toEmail + " is successed!");
        })
    }






    home: boolean = true;
    tranfer: boolean = false;
    wallet: boolean = true;
    history: boolean = true;
    help: boolean = true;

    HomeSelected: boolean = true;
    TransferSelected: boolean = false;
    WalletSelected: boolean = false;
    HistorySelected: boolean = false;
    HelpSelected: boolean = false;


    toggleHome() {
        this.home = false;
        this.tranfer = true;
        this.wallet = true;
        this.history = true;
        this.help = true;

        this.HomeSelected = true;
        this.TransferSelected = false;
        this.WalletSelected = false;
        this.HistorySelected = false;
        this.HelpSelected = false;
    }

    toggleTransfer() {
        this.home = true;
        this.tranfer = false;
        this.wallet = true;
        this.history = true;
        this.help = true;

        this.HomeSelected = false;
        this.TransferSelected = true;
        this.WalletSelected = false;
        this.HistorySelected = false;
        this.HelpSelected = false;
    }

    toggleWallet() {
        this.home = true;
        this.tranfer = true;
        this.wallet = false;
        this.history = true;
        this.help = true;

        this.HomeSelected = false;
        this.TransferSelected = false;
        this.WalletSelected = true;
        this.HistorySelected = false;
        this.HelpSelected = false;
    }

    toggleHistory() {
        this.home = true;
        this.tranfer = true;
        this.wallet = true;
        this.history = false;
        this.help = true;

        this.HomeSelected = false;
        this.TransferSelected = false;
        this.WalletSelected = false;
        this.HistorySelected = true;
        this.HelpSelected = false;
    }

    toggleHelp() {
        this.home = true;
        this.tranfer = true;
        this.wallet = true;
        this.history = true;
        this.help = false;

        this.HomeSelected = false;
        this.TransferSelected = false;
        this.WalletSelected = false;
        this.HistorySelected = false;
        this.HelpSelected = true;
    }

}