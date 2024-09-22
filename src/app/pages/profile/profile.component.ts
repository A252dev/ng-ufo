import { NgClass, NgFor } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { JwtService } from "../../services/jwt.service";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TransferSection } from "../../components/UI/profile/transfer-section/tranfer-section.component";
import { AddBalanceSection } from "../../components/UI/profile/add-balance-section/add-balance-section";

@Component({
    selector: 'profile-page',
    standalone: true,
    imports: [
        NgClass, FormsModule, ReactiveFormsModule,
        TransferSection,
        AddBalanceSection,
        NgFor
    ],
    templateUrl: './profile.component.html',
    styleUrl: '../../styles/profile.css'
})

export class Profile implements OnInit {

    constructor(private service: JwtService) { }

    transferForm: FormGroup | undefined;

    ngOnInit(): void {
        // this.profile();
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

    @Input() transactionHistory;

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

        this.service.getHistory().subscribe(
            (response) => {
                this.transactionHistory = response;
                console.log(response);
            }
        )

    }

    home: boolean = false;
    tranfer: boolean = true;
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