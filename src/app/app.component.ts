import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favorite-component/favorite-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  post = {
    title: "Title",
    isFavourite: true,
  }

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log("Favourite changed: ", eventArgs)
  }

}
