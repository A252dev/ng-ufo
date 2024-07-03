import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'profile-page',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})

export class Profile{

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
    

    toggleHome(){
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

    toggleTransfer(){
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

    toggleWallet(){
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

    toggleHistory(){
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

    toggleHelp(){
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