import { Component } from "@angular/core";

@Component({
    selector: 'directives',
    template: `
        <h2 (click)="onClick()">Directives</h2>
        <div *ngIf="courses; then coursesList else noCourses"></div>
        <ng-template #coursesList>
            List of courses
        </ng-template>
        <ng-template #noCourses>
            No courses yet
        </ng-template>
    `
})
export class DirectivesComponent {
    courses: boolean = true;

    onClick() {
        this.courses = !this.courses
    }
}