import { Component, OnInit } from '@angular/core';
import { FavoriteComponentComponent, FavouriteChangedEventArgs } from '../../favorite-component/favorite-component.component'

@Component({
  selector: 'app-favourite-container',
  templateUrl: './favourite-container.component.html',
})
export class FavouriteContainerComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {
    
  }

  post = {
    title: "Title",
    isFavourite: true,
  }

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log("Favourite changed: ", eventArgs)
  }

}
