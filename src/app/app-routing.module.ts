import { BibliothequeComponent } from './pages/bibliotheque/bibliotheque.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'bibliotheque',
    component : BibliothequeComponent
  },
  {
    path : '',
    redirectTo : 'bibliotheque',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
