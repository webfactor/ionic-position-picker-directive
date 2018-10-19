import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Coords } from '../models/coords';
import { PositionPickerModalPage } from '../pages/positon-picker-modal/position-picker-modal';

@Directive({ selector: 'button[wf-position-picker]' })
export class PositionPickerDirective {
  @Output()
  positionPick = new EventEmitter();
  @Input()
  position?: Coords = new Coords(0, 0);
  @Input()
  title?: string = 'Position auswählen';
  @Input()
  zoom?: number = 13;
  @Input()
  streetViewControl?: boolean = false;
  @Input()
  zoomControl?: boolean = false;
  @Input()
  backIcon?: string = 'arrow-back';
  @Input()
  acceptIcon?: string = 'checkmark';
  @Input()
  saveOnClose?: boolean = false;
  @Input()
  noMarker: boolean = false;
  @Input()
  clickableIcons: boolean = true;
  @Input()
  defaultPosition: Coords = new Coords(50, 10);
  @Input()
  defaultZoom: number = 13;
  @Input()
  navbarBackgroundColor: string = 'black';
  @Input()
  navbarTextColor: string = 'white'

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
      saveOnClose: this.saveOnClose,
      noMarker: this.noMarker,
      clickableIcons: this.clickableIcons,
      defaultPosition: this.defaultPosition,
      defaultZoom: this.defaultZoom,
      navbarBackgroundColor: this.navbarBackgroundColor,
      navbarTextColor: this.navbarTextColor
    });
    modal.onDidDismiss(data => {
      if (data) this.positionPick.emit(data);
    });
    modal.present();
  }
}
