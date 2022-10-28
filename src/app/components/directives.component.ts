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
    classes;

    onClick() {
        this.courses = !this.courses
    }

    loadCourses() {
        this.classes = [
            { id: 1, name: 'Spanish'},
            { id: 2, name: 'English'},
            { id: 3, name: 'French'},
        ]
    }

    trackCourse(index, course) {
        return course ? course.id : undefined
    }
}