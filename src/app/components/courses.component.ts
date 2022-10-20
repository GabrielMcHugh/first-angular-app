import { Component } from "@angular/core";
import { AuthorsService } from "./authors.service";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{authors.length}} {{title}}</h2>
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        <ul>
    `
})
export class CoursesComponent {
    title = "Authors 🏫"
    authors;

    constructor(service: AuthorsService) {
        this.authors = service.Authors
    }
}