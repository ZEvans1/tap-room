import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div class="kombucha-form">
      <select (change)="onChange($event.target.value)">
        <option value="allKegs" selected="selected">All Kegs</option>
        <option value="fullKegs">Full Kegs</option>
        <option value="emptyKegs">Empty Kegs</option>
      </select>
    </div>

    <div class="kombucha-list">
      <ul>
        <li *ngFor="let currentKeg of childKegList | volume:filterByVolume">{{currentKeg.name}}, {{currentKeg.brand}}, <span [class]="priceColor(currentKeg)">$ {{currentKeg.price}}/pint</span>, {{currentKeg.flavor}}, {{currentKeg.kegAmount}} pints available <button class="btn btn-outline-primary" (click)="consumeButtonHasBeenClicked(currentKeg)">Fill a pint</button> <button class="btn btn-outline-success" (click)="growlerButtonHasBeenClicked(currentKeg)">Fill a growler</button> <button class="btn btn-outline-secondary" (click)="editButtonHasBeenClicked(currentKeg)">Edit keg</button> </li>
      </ul>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByVolume: string = "allKegs";

  priceColor(currentKeg){
    if (currentKeg.price > 5){
      return "bg-success";
    } else if (currentKeg.price <=5 && currentKeg.price > 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  onChange(optionFromMenu) {
    this.filterByVolume = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  consumeButtonHasBeenClicked(kegToConsume: Keg) {
    if (kegToConsume.kegAmount > 0) {
      kegToConsume.kegAmount -=1;
    } else {
      alert('Keg is empty. Can not consume. ');
    }
  }

  growlerButtonHasBeenClicked(kegToConsume: Keg) {
    if (kegToConsume.kegAmount > 1) {
      kegToConsume.kegAmount -=2;
    } else if (kegToConsume.kegAmount === 1) {
      alert('Not enough for a growler. How about a pint?');
    } else {
      alert('Keg is empty. Can not consume. ');
    }
  }
}
