import { Inject, Injectable } from '@angular/core';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { AlertType } from '../enum/alert';


@Injectable({
  providedIn: 'root',
})
export class AlertService {

  private message: string = '';
  private alertType?: TuiNotification;
  private label?: string;
  private autoClose: boolean = true;
  private alert: any;
  private duration: number = 1000;

  constructor(
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService
  ) {}

  private setAutoClose(autoClose: boolean) {
    this.autoClose = autoClose;
  }

  public defineMessage(message: string) {
    this.message = message;
    return this;
  }

  public setDuration(duration: number) {
    this.duration = duration;
  }

  private setAlertType(alertType: string) {

    if (alertType == AlertType.ERROR)    this.alertType = TuiNotification.Error;
    if (alertType == AlertType.SUCCESS)  this.alertType = TuiNotification.Success;
    if (alertType == AlertType.WARNING)  this.alertType = TuiNotification.Warning;

    return this;
  }

  buildSuccess() {
    this.setAlertType('success');
    this.setAutoClose(true);
    return this.build();
  }

  buildError() {
    this.setAlertType('error');
    this.setAutoClose(true);
    return this.build();
  }

  buildWarning() {
    this.setAlertType('warning');
    this.setAutoClose(true);
    return this.build();
  }

  private build() {

    const alertOps = {
      label: this.label,
      autoClose: this.autoClose,
      status: this.alertType,
      duration: this.duration,
    };
    return this.alertService.open(this.message,alertOps).subscribe();
  }

  private close() {
    return this.alert.unsubscribe();
  }
}
