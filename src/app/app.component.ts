import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    response: Observable<any>;
    constructor(private http: HttpClient) {}

    request() {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        this.response = this.http.get(url, {observe: 'body'});
    }
}
