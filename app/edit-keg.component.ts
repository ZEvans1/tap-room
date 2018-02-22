import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div class="edit-form">
      <div *ngIf="childSelectedKeg">
        <h4>{{childSelectedKeg.name}}</h4>
        <h5>Edit Keg Details</h5>
        <label>Edit Keg Name</label>
        <input [(ngModel)]="childSelectedKeg.name">
        <br>
        <label>Edit Keg Brand</label>
        <input [(ngModel)]="childSelectedKeg.brand">
        <br>
        <label>Edit Keg Price</label>
        <input [(ngModel)]="childSelectedKeg.price">
        <br>
        <label>Edit Keg Flavor</label>
        <input [(ngModel)]="childSelectedKeg.flavor">
        <br>
        <button (click)="doneButtonClicked()">Done editing</button>
        <hr>
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
