import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeData } from '../home/home';

/*
add this code to stupidity in: app.module.ts
add this into: entryComponents
and add this into: declarations
 */

/*
  Generated class for the Scan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  barcodeData: BarcodeData; // barcode data

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.barcodeData = navParams.get('details');
  }

  /*
  back() {
    this.navCtrl.pop();
  }
  */

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

}
