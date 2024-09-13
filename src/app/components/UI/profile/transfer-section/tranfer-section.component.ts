import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActionService } from "../../../../services/action.service";

@Component({
    selector: 'transfer-section',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    styleUrl: '../../../../styles/profile.css',
    templateUrl: './transfer-section.component.html',
})

export class TransferSection implements OnInit {

    constructor(private fb: FormBuilder, private action: ActionService) { }

    transferForm: FormGroup | undefined;

    ngOnInit(): void {

        this.transferForm = this.fb.group({
            toEmail: ['', [Validators.required, Validators.email]],
            summa: ['', [Validators.required]],
            currency: ['', [Validators.required]],
        })

    }

    transferSubmit() {
        console.log(this.transferForm.value);
        this.action.transfer(this.transferForm.value).subscribe((response) => {
            console.log("Transfer to " + this.transferForm.get("toEmail") + " is successed!");
            location.reload();
        });
    }

}