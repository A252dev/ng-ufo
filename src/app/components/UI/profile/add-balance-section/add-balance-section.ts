import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActionService } from "../../../../services/action.service";

@Component({
    selector: 'add-balance-section',
    standalone: true,
    imports: [ReactiveFormsModule],
    styleUrl: '../../../../styles/profile.css',
    templateUrl: './add-balance-section.component.html'
})

export class AddBalanceSection implements OnInit {

    constructor(private fb: FormBuilder, private action: ActionService) { }

    addBalanceForm: FormGroup | undefined;

    ngOnInit(): void {
        this.addBalanceForm = this.fb.group({
            summa: ['', [Validators.required]],
            currency: ['', [Validators.required]],
        })
    }

    addBalanceSubmit() {
        console.log(this.addBalanceForm.value);
        this.action.addBalance(this.addBalanceForm.value).subscribe((response) => {
            console.log("Balance " + this.addBalanceForm.get("summa") + " is added!");
            location.reload();
        });
    }

}