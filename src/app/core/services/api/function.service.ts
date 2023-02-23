import { Injectable } from "@angular/core";
import { IBook } from "../../interfaces/book";
import { HttpService } from "./api.service";

@Injectable({
  providedIn : 'root'
})
export class FunctionService {

  constructor(private httpService : HttpService ) {

  }


  setBook(book : any) {
   return this.httpService.post({endpoint : 'api/books',data : book});
  }

  updateBook(book : IBook) {
    return this.httpService.put({endpoint : 'api/books',data : book});
  }

  getBooks() {
   return this.httpService.get("api/books");
  }

  deleteBook(id : string) {
    return this.httpService.delete(`api/books/${id}`);
  }



}
