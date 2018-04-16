import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PositionPickerModalPage } from '../pages/positon-picker-modal/position-picker-modal';
import { Coords } from '../models/coords';


@Directive({ selector: 'button[wf-position-picker]' })
export class PositionPickerDirective {
  @Output() positionPick = new EventEmitter();
  @Input() position?: Coords = new Coords(0,0);
  @Input() title?: string = "Position auswählen";
  @Input() zoom?: number = 13;
  @Input() streetViewControl?: boolean = false;
  @Input() zoomControl?: boolean = false;
  @Input() backIcon?: string = 'arrow-back';
  @Input() acceptIcon?: string = 'checkmark';
  @Input() saveOnClose?: boolean = false;

  constructor(private modalCtrl: ModalController) {}

  @HostListener('click')
  presentPositionPickerModal() {
    let modal = this.modalCtrl.create(PositionPickerModalPage, {
      backIcon: this.backIcon,
      acceptIcon: this.acceptIcon,
      position: this.position,
      title: this.title,
      zoom: this.zoom,
      steetViewControl: this.streetViewControl,
      zoomControl: this.zoomControl,
      saveOnClose: this.saveOnClose

    });
    modal.onDidDismiss(data => {
      if (data) this.positionPick.emit(data);
    });
    modal.present();
  }
}
