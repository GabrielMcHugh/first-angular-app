import { Component } from "@angular/core";

@Component({
    selector: 'directives',
    templateUrl: './directives.component.html'
})
export class DirectivesComponent {
    courses: boolean = true;

    onClick() {
        this.courses = !this.courses
    }
}