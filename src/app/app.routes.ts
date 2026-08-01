import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: () =>
      import(
        "./features/student-dashboard/student-dashboard.component"
      ).then((m) => m.StudentDashboardComponent),
  },

  // Exercise 4: Add the parameterized route for Course Detail
  {
    path: "courses/:id",
    loadComponent: () =>
      import(
        "./features/course-detail/course-detail.component"
      ).then((m) => m.CourseDetailComponent),
  },

  {
    path: "enroll",
    loadComponent: () =>
      import(
        "./features/enrollment-form/enrollment-form"
      ).then((m) => m.EnrollmentFormComponent), // <-- Fixed to match your class name exactly
  },

  { path: "", redirectTo: "dashboard", pathMatch: "full" },
];
