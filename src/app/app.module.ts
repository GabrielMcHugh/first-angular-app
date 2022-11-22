import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses.component';
import { CoursesService } from './components/courses.service';
import { AuthorsService } from './components/authors.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponentComponent } from './favorite-component/favorite-component.component';
import { DirectivesComponent } from './components/directives.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PostsComponentComponent } from './components/posts-component/posts-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { GithubProfileComponentComponent } from './components/github-profile-component/github-profile-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { RouterModule } from '@angular/router';
import { FavouriteContainerComponent } from './components/favourite-container/favourite-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponentComponent,
    FavouriteContainerComponent,
    DirectivesComponent,
    ChangePasswordComponent,
    PostsComponentComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    GithubProfileComponentComponent,
    NotFoundComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponentComponent },
      {path: 'components1', component: CoursesComponent},
      {path: 'components2', component: FavouriteContainerComponent},
      {path: 'components3', component: DirectivesComponent},
      {path: 'components4', component: ChangePasswordComponent},
      {path: 'components5', component: PostsComponentComponent},
      {path: 'followers/:username', component: GithubProfileComponentComponent},
      {path: 'followers', component: GithubProfileComponentComponent},
      {path: 'posts', component: PostsComponentComponent},
      {path: '**', component: NotFoundComponentComponent},

    ]),
  ],
  providers: [
    CoursesService,
    AuthorsService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
