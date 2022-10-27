import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favorite-component.component.html',
})
export class FavoriteComponentComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean = true;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelected = !this.isSelected
    this.click.emit({ newValue: this.isSelected});
  }

}

export interface FavouriteChangedEventArgs {
  newValue: boolean
}
