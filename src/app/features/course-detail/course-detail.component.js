import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
let CourseDetailComponent = class CourseDetailComponent {
    route = inject(ActivatedRoute);
    courseId = this.route.snapshot.paramMap.get('id');
};
CourseDetailComponent = __decorate([
    Component({
        selector: 'app-course-detail',
        standalone: true,
        template: `
    <div class="course-detail">
      <h1>Course Detail</h1>
      <p>Course ID: {{ courseId }}</p>
      <p>This page is under development.</p>
    </div>
  `,
        styles: [
            `
      .course-detail {
        padding: 1rem;
      }

      h1 {
        margin-bottom: 0.75rem;
      }
    `,
        ],
    })
], CourseDetailComponent);
export { CourseDetailComponent };
