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

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponentComponent,
    DirectivesComponent,
    ChangePasswordComponent,
    PostsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CoursesService,
    AuthorsService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
