import { Inject, Injectable, Injector } from '@angular/core';
import { TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

@Injectable({
  providedIn: 'root',
})
export class ModalInjectable {
  private dialog :any;
  private component : any ;
  private title :any;
  private args?:{};
  private size: TuiDialogSize = 'm';
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) { }

  public setArgs(args : {}){
    this.args = args;
    return this;
  }

  public setComponent(component : any){
    this.component = component;
    return this;
  }

  public setTile(title : string){
    this.title = title;
    return this;
  }


  private builder(){
    return this.dialog = this.dialogService.open<{}>(
      new PolymorpheusComponent(this.component, this.injector),
      {
        data: this.args,
        dismissible: true,
        label: this.title ,
        size: this.size ,
      }
    );
  }

  public display(){
    return this.builder().subscribe();
  }


  closeDialog() {
    return this.dialog.close();
  }
}
