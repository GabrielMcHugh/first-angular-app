import { Component, Input } from "@angular/core";

@Component({
    selector: 'directives',
    templateUrl: './directives.component.html',
    styles: [`
        .card {
            margin-bottom: 1rem
        }
    `]
})
export class DirectivesComponent {
    courses: boolean = true;
    viewMode: 'map' | 'list' = 'map'

    onClick() {
        this.courses = !this.courses
    }
}