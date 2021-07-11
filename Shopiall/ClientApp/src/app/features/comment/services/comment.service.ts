import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  public getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('/api/comment/');
  }
}
