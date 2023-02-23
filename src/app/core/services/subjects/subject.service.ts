import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class SubjectService {

  private isClicked = new Subject<Boolean>();
  isClicked$ = this.isClicked.asObservable();

  constructor() {

  }

  emit(status: boolean) {
    this.isClicked.next(status);
  }
}
