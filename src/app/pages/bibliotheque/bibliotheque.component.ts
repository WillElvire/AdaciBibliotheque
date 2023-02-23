import { SubjectService } from 'src/app/core/services/subjects/subject.service';
import { Component, OnInit } from '@angular/core';
import { BookComponent } from 'src/app/components/shared/book/book.component';
import { IBook } from 'src/app/core/interfaces/book';
import { FunctionService } from 'src/app/core/services/api/function.service';
import { ModalInjectable } from 'src/app/core/services/modals/modal.service';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.scss'],
})
export class BibliothequeComponent implements OnInit {

  books: IBook[] = [];
  columns  : any ;

  constructor(
    private modalInjectable: ModalInjectable,
    private functionService: FunctionService,
    private subjectService : SubjectService
  ) {

  }

  ngOnInit(): void {
    this.getAllBooks();
    this.subjectService.isClicked$.subscribe((response)=>{
       if(response) this.getAllBooks();
    });
  }

  showAddBookModal() {
    this.modalInjectable
      .setComponent(BookComponent)
      .setTile("Formulaire d'enregistrement de livre")
      .display();
  }

  getAllBooks() {
    this.functionService.getBooks().subscribe((response : any) => {
      this.books = response as IBook[];
      this.columns = Object.keys(this.books?.[0])
      console.log(response);
    });
  }







}
