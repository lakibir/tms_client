import { Component, signal, computed } from "@angular/core";
import { CourseCardComponent } from "../../ui/course-card/course-card";
import { Course } from "../../models/course.model";

@Component({
  selector: "app-student-dashboard",
  standalone: true,
  imports: [CourseCardComponent], // Required for <tms-course-card> in template
  template: `
    <div class="dashboard">
      <h1>Welcome, {{ studentName() }}</h1>
      <p>Credits Earned: {{ earnedCredits() }}</p>
      <p>Graduation Status: {{ graduationStatus() }}</p>
      <button (click)="registerForClass()">
        Register for a Class (+3 credits)
      </button>
    </div>

    <hr />

    <h2>Course Catalog</h2>

    @if (availableCourses().length === 0) {
      <div class="empty-state">
        <p>No courses are available this term. Check back during registration.</p>
      </div>
    } @else {
      <div class="grid">
        @for (course of availableCourses(); track course.id) {
          <tms-course-card 
            [course]="course" 
            (enrollClicked)="handleEnroll($event)"
          ></tms-course-card>
        } @empty {
          <p>No results match your search.</p>
        }
      </div>
    }

    @if (selectedCourse(); as picked) {
      <p class="selection-hint" role="status">
        Last enrollment request: <strong>{{ picked.title }}</strong> ({{ picked.code }})
      </p>
    }
  `,
  styleUrl: "./student-dashboard.component.scss",
})
export class StudentDashboardComponent {
  // Existing Student Signals
  studentName = signal("Liya Kebede");
  earnedCredits = signal(45);

  graduationStatus = computed(() =>
    this.earnedCredits() >= 120 ? "Eligible for Graduation" : "In Progress"
  );

  // Exercise 2 & 3: Selection and Catalog Signals[cite: 1]
  selectedCourse = signal<Course | null>(null);

  availableCourses = signal<Course[]>([
    { id: 1, title: "Advanced Java Services", code: "CSE-101", maxCapacity: 30, enrollmentCount: 10 },
    { id: 2, title: "Angular UI Lab", code: "CSE-210", maxCapacity: 25, enrollmentCount: 25 },
    { id: 3, title: "Database Design", code: "CSE-305", maxCapacity: 20, enrollmentCount: 18 },
    { id: 4, title: "API Security Workshop", code: "CSE-420", maxCapacity: 40, enrollmentCount: 15 }
  ]);

  registerForClass() {
    this.earnedCredits.update((c) => c + 3);
  }

  // Exercise 2: Event Handler[cite: 1]
  handleEnroll(course: Course) {
    this.selectedCourse.set(course);
    console.log('Enrollment requested for:', course.title);
  }
}