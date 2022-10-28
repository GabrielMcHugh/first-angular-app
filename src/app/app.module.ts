import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses.component';
import { CoursesService } from './components/courses.service';
import { AuthorsService } from './components/authors.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponentComponent } from './favorite-component/favorite-component.component';
import { DirectivesComponent } from './components/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponentComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
