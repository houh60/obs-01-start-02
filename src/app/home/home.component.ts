import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    private subscription = new Subscription;
    constructor() {}

    ngOnInit() {
        const customInterval = new Observable(observer => {
            let count = 0;
            setInterval(() => {
                observer.next(count++);
                if(count == 5) {
                    observer.complete();
                }
                if(count > 3) {
                    observer.error(new Error('Count is greater than 3!'));
                }
            }, 1000);
        });

        this.subscription = customInterval.pipe(filter(data => {
            return data as number > 0
        }), map(data => {
            return 'Round: ' + (data as number + 1);
        })).subscribe({
            next: data => {
                console.log('data: ', data);
            },
            error: error => {
                console.log('error: ', error);
                alert(error.message);
            },
            complete: () => {
                console.log('Completed!');
            }
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
