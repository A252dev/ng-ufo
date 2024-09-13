import { DOCUMENT, NgClass } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { JwtService } from "../../services/jwt.service";
import { routes } from "../../app.routes";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActionService } from "../../services/action.service";
import { AsyncLocalStorage } from "async_hooks";
import { TransferSection } from "../../components/UI/profile/transfer-section/tranfer-section.component";
import { delay } from "rxjs";

@Component({
    selector: 'profile-page',
    standalone: true,
    imports: [
        NgClass, FormsModule, ReactiveFormsModule,
        TransferSection
    ],
    templateUrl: './profile.component.html',
    styleUrl: '../../styles/profile.css'
})

export class Profile implements OnInit {

    constructor(private service: JwtService,
        private router: Router
    ) { }

    transferForm: FormGroup | undefined;

    ngOnInit(): void {

        // if (localStorage.getItem('jwt') == null) {
        //     console.log("jwt is null!!!");
        //     this.router.navigateByUrl("login");
        // } else {
        //     this.profile();
        // }
        this.profile();
        // window.location.reload();

    }

    title: string;
    firstName: string;
    secondName: string;
    email: string;
    birthday: string;

    AUD: number;
    BRL: number;
    CAD: number;
    CNY: number;
    CZK: number;
    DKK: number;
    EUR: number;
    HKD: number;
    HUF: number;
    ILS: number;
    JPY: number;
    MYR: number;
    MXN: number;
    TWD: number;
    NZD: number;
    NOK: number;
    PHP: number;
    PLN: number;
    GBP: number;
    SGD: number;
    SEK: number;
    CHF: number;
    THB: number;
    USD: number;

    profile() {

        this.service.profile().subscribe(
            (response) => {
                console.log(response);
                this.title = response.info[0].title;
                this.firstName = response.info[0].firstName;
                this.secondName = response.info[0].secondName;
                this.email = response.info[0].email;
                this.birthday = response.info[0].birthday;

                this.AUD = response.info[1].AUD;
                this.BRL = response.info[1].BRL;
                this.CAD = response.info[1].CAD;
                this.CNY = response.info[1].CNY;
                this.CZK = response.info[1].CZK;
                this.DKK = response.info[1].DKK;
                this.EUR = response.info[1].EUR;
                this.HKD = response.info[1].HKD;
                this.HUF = response.info[1].HUF;
                this.ILS = response.info[1].ILS;
                this.JPY = response.info[1].JPY;
                this.MYR = response.info[1].MYR;
                this.MXN = response.info[1].MXN;
                this.TWD = response.info[1].TWD;
                this.NZD = response.info[1].NZD;
                this.NOK = response.info[1].NOK;
                this.PHP = response.info[1].PHP;
                this.PLN = response.info[1].PLN;
                this.GBP = response.info[1].GBP;
                this.SGD = response.info[1].SGD;
                this.SEK = response.info[1].SEK;
                this.CHF = response.info[1].CHF;
                this.THB = response.info[1].THB;
                this.USD = response.info[1].USD;
            }
        )
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

    activeLink: string;

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