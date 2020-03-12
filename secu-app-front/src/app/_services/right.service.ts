import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AbstractService } from './abstract.service';
import { Right } from '../_models/right';

@Injectable()
export class RightService extends AbstractService {

    private url = 'rights';

    constructor(http: HttpClient) {
        super(http);
    }

    getAllRights(): Observable<Right[]> {
        return this.http.get<Right[]>(`http://localhost:3000/${this.url}`, this.getOptions('GET'));
    }

}