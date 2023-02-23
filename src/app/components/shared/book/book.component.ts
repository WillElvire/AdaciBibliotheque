import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { FunctionService } from 'src/app/core/services/api/function.service';
import { SubjectService } from 'src/app/core/services/subjects/subject.service';
import { AlertService } from 'src/app/core/utils/alert';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    isbn: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    nombreDePage: new FormControl('', Validators.required),
    maisonEdition: new FormControl('', Validators.required),
    dateDeParution: new FormControl(new TuiDay(2017, 0, 15), Validators.required),
  });

  constructor(private alertService : AlertService, private functionService : FunctionService , private subjectService : SubjectService) {

  }

  addNewBook() {

    if(this.bookForm.valid) {
      this.functionService.setBook(this.bookForm.value).subscribe({
        next : (responce)=>{
          console.log(responce);
          this.subjectService.emit(true);
        },
        error : (err) => console.log(err)
      });
      return;
    }
    return this.alertService.defineMessage("Veuillez renseigner les differents champs")
    .buildError();
  }
}
