import { Component, OnInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';


@Component({
  selector: 'app-my-stepper',
  templateUrl: './my-stepper.component.html',
  styleUrls: ['./my-stepper.component.css'],
  providers: [{ provide: CdkStepper, useExisting: MyStepperComponent }]
})
export class MyStepperComponent extends CdkStepper implements OnInit {

  onClick(index: number): void {
    this.selectedIndex = index;
  }

  ngOnInit() {
  }

}