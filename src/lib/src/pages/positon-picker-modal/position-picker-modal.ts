import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import { Coords } from '../../models/coords';
import { GeolocationServiceProvider } from '../../providers/geolocation-service';

@IonicPage()
@Component({
  selector: 'page-position-picker-modal',
  templateUrl: 'position-picker-modal.html'
})
export class PositionPickerModalPage {
  position: Coords = null;
  oldposition: Coords = null;
  backIcon: string = '';
  acceptIcon: string = '';
  title: string = '';
  zoom: number = 0;
  streetViewControl: boolean = true;
  zoomControl: boolean = true;
  saveOnClose: boolean = false;
  noMarker: boolean = false;

  constructor(
    public viewCtrl: ViewController,
    public geolocation: GeolocationServiceProvider,
    public navParams: NavParams
  ) {
    this.getPosition();
    this.backIcon = navParams.get('backIcon');
    this.acceptIcon = navParams.get('acceptIcon');
    this.title = navParams.get('title');
    this.zoom = navParams.get('zoom');
    this.streetViewControl = navParams.get('streetViewControl');
    this.zoomControl = navParams.get('zoomControl');
    this.saveOnClose = navParams.get('saveOnClose');
    this.noMarker = navParams.get('noMarker');
  }

  getPosition() {
    if (
      this.navParams.get('position') &&
      this.navParams.get('position').lat != 0 &&
      this.navParams.get('position').lon != 0
    ) {
      this.position = this.navParams.get('position');
      this.oldposition = this.position;
    } else this.getPositionIfNoAvailable();
  }

  getPositionIfNoAvailable() {
    this.geolocation.getCurrentPosition().then(position => {
      this.position = position;
    });
  }

  placeMarker(event) {
    this.noMarker = false;
    this.position = new Coords(event.coords.lat, event.coords.lng);
  }

  dismiss() {
    if (this.saveOnClose) {
      let data = { position: this.position, oldposition: this.oldposition };
      this.viewCtrl.dismiss(data);
    } else this.viewCtrl.dismiss();
  }

  savePosition() {
    let data = { position: this.position, oldposition: this.oldposition };
    this.viewCtrl.dismiss(data);
  }
}
