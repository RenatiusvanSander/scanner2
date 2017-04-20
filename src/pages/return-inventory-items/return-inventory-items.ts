/**
 * imports the class Component
 */
import { Component } from '@angular/core';
/**
 * imports the classes NavController, NavParams, AlertController
 */
import { NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * imports the class BarcodeData
 */
import { BarcodeData } from '../home/home';
/**
 * imports the class Http
 */
import {Http} from '@angular/http';
/**
 * imports the class rxjs/add/operator/catch
 */
import 'rxjs/add/operator/catch';
/**
 * imports the class rxjs/add/operator/map
 */
import 'rxjs/add/operator/map';
/**
 * imports the class Config
 */
import {Config} from '../app-constants';

/*
  Generated class for the ReturnInventoryItems page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
/**
 * Components loads the view template return-inventory-items.html
 * and the selector page-return-inventory-items
 */
@Component({
  selector: 'page-return-inventory-items',
  templateUrl: 'return-inventory-items.html'
})
/**
 * exports the class `ReturnInventoryItemsPage`
 */
export class ReturnInventoryItemsPage {

  /**
   * The barcode data is stored in the "barcodeData"
   */
  barcodeData: BarcodeData; // scanned barcode data
  /**
   * http is a http-provider from Angular2 "http"
   */
  // inventoryItem: any; // received inventory item with http.get
  http: Http; // httpProvider

  /**
   * belongs to class ´ReturnInventoryItemsPage´
   * @constructor
   * @param navCtrl is the navigation controller
   * @param navParams contains the navigations parameters
   * here is also the barcodeData stored
   * @param http is the http provider, which is sending the request
   * @param alertCtrl is a windows controller for the alert boxes
   * these may appear
   */
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              http: Http, /* get /api/inventory-items/return */
              public alertCtrl: AlertController /* message window */)
  {
    this.barcodeData = navParams.get('details');
    this.http = http;

    this.returnInventoryItem();
  }

  /**
   * belongs to class ´ReturnInventoryItemsPage´
   * the method returns an inventory-item finally
   * http-request is send to inventory-api and changes
   * removes the borrower
   */
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

  /**
   * belongs to class ´ReturnInventoryItemsPage´
   * The method logs ionViewDidLoad ReturnInventoryItemsPage
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnInventoryItemsPage');
  }

}
