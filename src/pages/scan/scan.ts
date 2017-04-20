/**
 * imports class Component
 */
import {Component} from '@angular/core';
/**
 * imports classes NavController, NavParams, AlertController
 */
import {NavController, NavParams, AlertController} from 'ionic-angular';
/**
 * imports class BarcodeData
 */
import {BarcodeData} from '../home/home';
/**
 * imports class Http
 */
import {Http} from '@angular/http';
/**
 * imports class rxjs/add/operator/catch
 */
import 'rxjs/add/operator/catch';
/**
 * imports class rxjs/add/operator/map
 */
import 'rxjs/add/operator/map';
/**
 * imports class Config
 */
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
/**
 * Component loads view template scan.html and the selector page-scan
 */
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
/**
 * exports class ´ScanPage´
 */
export class ScanPage {

  /**
   * barcodeData has the barcode information
   */
  barcodeData: BarcodeData; // barcode data
  /**
   * http is http-provider for receiving scanned
   * inventory-barcode matching informations
   */
  http: Http; // httpProvider

  /**
   * belongs to class ´ScanPage´
   * @constructor
   * @param navCtrl navigation controller for the view, model and controller
   * @param navParams navigation Params store the barcodeData information,
   * if it handed over
   * @param http provides us with http-methods to ask api to receive
   * inventory-item data from database
   * @param alertCtrl it is for every alterbox the controller
   */
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              http: Http,
              public alertCtrl: AlertController) {

    this.barcodeData = navParams.get('details');
    this.http = http;
    this.receiveInventoryItem();
  }

  /**
   * belongs to class ´ScanPage´
   * the method ´receiveInventoryItem´ request at inventory-api an
   * inventory-item via Config.config.serverUrl +':3000/api/inventory-items/scanned-item/?barcode='
   * + this.barcodeData.text
   */
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

  /**
   * belongs to `ScanPage`
   * method ´ionViewDidLoad´ logs the page has been created
   * to view
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

}
