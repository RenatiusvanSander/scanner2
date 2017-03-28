import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {BarcodeData} from '../home/home';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Config} from '../app-constants';

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
  http: Http; // httpProvider

  constructor(public navCtrl: NavController, public navParams: NavParams, http: Http, public alertCtrl: AlertController) {

    this.barcodeData = navParams.get('details');
    this.http = http;
    this.receiveInventoryItem();
  }

  // receive the inventoryItem
  receiveInventoryItem() {
    // url to get
    var url = Config.config.serverUrl +':3000/api/inventory-items/scanned-item/?barcode=' + this.barcodeData.text;
    this.http.get(url)
      .map((response) => response.json()) // result is converted to JSON
      .subscribe(data => {
          console.log(data[0]);

          var message = 'Id: ' + data[0].id +
            '<br />Inventory No: ' + data[0].inventoryNo +
            '<br />State of Inventory-Item: ' + data[0].itemState +
            '<br />Barcode: ' + data[0].barcode +
            '<br />Inventory-Item: ' + data[0].itemname +
            '<br />fix Location: ' + data[0].fixLocation +
            '<br />Borrower: ' + data[0].borrower +
            '<br />Comment: ' + data[0].comment +
            '<br />Inserted: ' + data[0].createdAt +
            '<br />Last change on data: ' + data[0].updatedAt;

          // Show alert Controller as box
          let alert = this.alertCtrl.create({
            title: 'Scan Result',
            message: message,
            buttons: ['OK']
          });

          // push the alert box to screen
          alert.present();
        },
        error => {
          console.log(error);

          // show error
          let alert = this.alertCtrl.create({
            title: 'Scan Result',
            message: 'The item is not in database!',
            buttons: ['OK']
          });

          // push the alert box to screen
          alert.present();
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

}
