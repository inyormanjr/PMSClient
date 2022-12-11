import { Data } from './../../../../../../node_modules/ngx-bootstrap/positioning/models/index.d';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base/ServiceBase';
import { Activity } from 'src/app/shared/models/activity';
import { Label } from 'src/app/shared/models/label';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ActivityService extends BaseService<Activity> {
  serviceRoute = 'activity';
  subServiceRoute = '/labels';
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.baseURL += this.serviceRoute;
  }

  getLabels(): Observable<Label[]> {
    return this.httpClient.get(this.baseURL + this.subServiceRoute).pipe((map((x: any) => x.data)));
  }

  updateLabel(id: any, label: Label): Observable<Label> {
    return this.httpClient
      .put(this.baseURL + this.subServiceRoute + `/${id}`, label)
      .pipe(map((x: any) => x.data));
  }

  createLabel(label: Label): Observable<Label> {
    return this.httpClient
      .post(this.baseURL + this.subServiceRoute, label)
      .pipe(map((x: any) => x.data));
  }

  deleteLabel(id: any): Observable<any> {
    return this.httpClient
      .delete(this.baseURL + this.subServiceRoute + `/${id}`)
      .pipe(map((x: any) => x));
  }
}
