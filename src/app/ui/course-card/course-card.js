import { __decorate } from "tslib";
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
let CourseCardComponent = class CourseCardComponent {
    course = input.required();
    enrollClicked = output();
};
CourseCardComponent = __decorate([
    Component({
        selector: 'tms-course-card',
        standalone: true,
        imports: [RouterLink],
        templateUrl: './course-card.html',
        styleUrls: ['./course-card.scss']
    })
], CourseCardComponent);
export { CourseCardComponent };
