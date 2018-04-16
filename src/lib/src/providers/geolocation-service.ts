import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Coords } from '../models/coords';



@Injectable()
export class GeolocationServiceProvider {
    options: any = {
        timeout: 10,
        desiredAccuracy: 10,
        samples: 1
    };

    constructor(private platform: Platform) {}

    getCurrentPosition(): Promise<Coords> {
        return new Promise<Coords>((resolve, reject) => {
            this.platform.ready().then(() => {
                let bgGeo: any = (<any>window).BackgroundGeolocation;

                if (!bgGeo) {
                    navigator.geolocation.getCurrentPosition(position => {
                        let coords = new Coords(position.coords.latitude, position.coords.longitude);
                        resolve(coords);
                    }, err => {
                        reject(err);
                    });
                    return;
                }

                bgGeo.getCurrentPosition(
                    position => {
                        let coords = new Coords(position.coords.latitude, position.coords.longitude);
                        resolve(coords);
                    },
                    err => {
                        reject(err);
                    },
                    this.options
                );
            });
        });
    }
}
