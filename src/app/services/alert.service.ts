import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<any>();

  private timeout;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.clear(), 5000);
    });
   }

   getAlert(): Observable<any> {
     return this.subject.asObservable();
   }

   success(message: string) {
     this.subject.next({ type: 'success', text: message });
   }

   error(message: string) {
      this.subject.next({ type: 'error', text: message });
   }

   clear() {
     this.subject.next();
   }


}
