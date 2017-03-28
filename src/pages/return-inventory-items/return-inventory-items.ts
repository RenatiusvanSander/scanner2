import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeData } from '../home/home';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Config} from '../app-constants';

/*
  Generated class for the ReturnInventoryItems page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-return-inventory-items',
  templateUrl: 'return-inventory-items.html'
})
export class ReturnInventoryItemsPage {

  barcodeData: BarcodeData; // scanned barcode data
  // inventoryItem: any; // received inventory item with http.get
  http: Http; // httpProvider

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              http: Http, /* get /api/inventory-items/return */
              public alertCtrl: AlertController /* message window */)
  {
    this.barcodeData = navParams.get('details');
    this.http = http;

    this.returnInventoryItem();
  }

  returnInventoryItem() {
    // url to get
    var url= Config.config.serverUrl + ':3000/api/inventory-items/return-items/?barcode=' + this.barcodeData.text;

    // request to return item to pool
    this.http.get(url)
      .map( (response) => response.text() ) // result is converted to text
      .subscribe( data =>
        {

          // Show alert Controller as box
          let alert = this.alertCtrl.create({
            title: 'Return Result',
            message: 'The inventory item has been returned.',
            buttons: ['OK']
          });

          // push the alert box to screen
          alert.present();
        },
        err =>  {
          console.log(err);

          // prepare alter box
          let alert = this.alertCtrl.create({
            title: 'Return Result Error',
            message: 'The inventory item is not in database.',
            buttons: ['OK']
          });

          // show alert box on screen
          alert.present();
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnInventoryItemsPage');
  }

}
