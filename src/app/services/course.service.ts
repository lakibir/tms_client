import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Course, CourseDetail, PagedResponse } from '../models/course.model';

interface V2CourseEnvelope {
  data: Course[];
}

@Injectable({ providedIn: 'root' })
export class CourseService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/courses';

  getAll(page = 1, pageSize = 50) {
    return this.http
      .get<PagedResponse<Course> | V2CourseEnvelope>(this.baseUrl, {
        params: {
          page: page.toString(),
          pageSize: pageSize.toString(),
        },
      })
      .pipe(
        map((response) =>
          'items' in response ? response.items : response.data,
        ),
      );
  }

  getById(id: string) {
    return this.http.get<CourseDetail>(`${this.baseUrl}/${id}`);
  }
}
