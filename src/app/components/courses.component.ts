import { Component } from "@angular/core";
import { AuthorsService } from "./authors.service";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{authors.length}} {{title}}</h2>
        <img [src]="imageURL" alt="">
        <table>
            <tr>
                <td [attr.colspan]="colSpan">test</td>
            </tr>
        </table>
        <div (click)="onDivClicked($event)">  
            <button class="btn"[class.btn-danger]="isActive" (click)="onSave($event)">Save</button>
        </div>      


        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        <ul>
    `
})
export class CoursesComponent {
    title = "Authors 🏫"
    imageURL = 'https://picsum.photos/200/300'
    colSpan = 2
    isActive = true
    authors;

    constructor(service: AuthorsService) {
        this.authors = service.Authors
    }

    onSave($event) {
        $event.stopPropagation()
        console.log("Button was clicked", $event)
    }

    onDivClicked($event) {
        console.log("Div was clicked")
    }
}