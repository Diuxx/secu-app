﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// internal import 
import { User } from '../_models/user';
import { UserService } from './user.service';
import { RightService } from './right.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    // var
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    public user: User; // --

    constructor(
        private http: HttpClient,
        private userService: UserService,
        private rightService: RightService,
        private router: Router
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(user: User) {
        this.user = user;
        // --
        this.userService.loginUser(this.user).subscribe(u => {
            this.rightService.getAllRights().subscribe(r => {
                // --
                this.user = u;
                this.user.right = r.find(req => req.id == this.user.right_id).name;

                localStorage.setItem('currentUser', JSON.stringify(u))
                this.currentUserSubject.next(this.user);
                
                // reload
                this.router.navigate(['/home']);
            }, err => {
                console.log('err => rights');
            })
        }, err => {
            console.log('err => Auth');
        })
    }

    logout() {
        // remove user from loscal storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);

        /* redirect */
        this.router.navigate(['/login']);
    }

}