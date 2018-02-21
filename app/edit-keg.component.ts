import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
      <div *ngIf="childSelectedKeg">
        <h4>{{childSelectedKeg.name}}</h4>
        <hr>
        <h5>Edit Keg Details</h5>
        <label>Edit Keg Name</label>
        <input [(ngModel)]="childSelectedKeg.name">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
