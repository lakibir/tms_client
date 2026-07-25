import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
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
export class CourseDetailComponent {
  private route = inject(ActivatedRoute);
  courseId = this.route.snapshot.paramMap.get('id');
}
