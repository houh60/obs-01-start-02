import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    private cusobserSub: Subscription;
    constructor() {}

    ngOnInit() {
        // this.subscription = interval(1000).subscribe(count => {
        //     console.log('count: ', count);
        // });

        // const cusobser = new Observable(observer => {
        //     let count = 0;
        //     setInterval(() => {
        //         observer.next(count);
        //         // if(count == 2) {
        //         //     observer.complete();
        //         // }
        //         if(count > 3) {
        //             observer.error(new Error('Count is greater than 3!'))
        //         }
        //         count++;
        //     }, 1000);
        // });

        // this.cusobserSub = cusobser.pipe(filter(data => {
        //     return data > 0;
        // }), map(data => {
        //     return 'Round: ' + (+data + 1);
        // })).subscribe(data => console.log(data),
        //     error => {
        //         console.log('error.message: ', error.message);
        //         alert(error.message);
        //     }, () => {
        //         console.log('Completed!');
        //     });
    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe();
        // this.cusobserSub.unsubscribe();
    }

}
