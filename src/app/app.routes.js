export const routes = [
    {
        path: "dashboard",
        loadComponent: () => import("./features/student-dashboard/student-dashboard.component").then((m) => m.StudentDashboardComponent),
    },
    // Exercise 4: Add the parameterized route for Course Detail
    {
        path: "courses/:id",
        loadComponent: () => import("./features/course-detail/course-detail.component").then((m) => m.CourseDetailComponent),
    },
    {
        path: "enroll",
        loadComponent: () => import("./features/enrollment-form/enrollment-form" // Added .component
        ).then((m) => m.EnrollmentFormComponent),
    },
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
];
