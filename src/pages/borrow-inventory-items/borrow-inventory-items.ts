/**
 * imports class
 */
import {Component} from "@angular/core";
/**
 * imports classes NavController, NavParams, AlertController
 */
import {NavController, NavParams, AlertController} from "ionic-angular";
/**
 * imports class BarcodeData
 */
import {BarcodeData} from "../home/home";
/**
 * imports class Http
 */
import {Http/*, RequestOptions, URLSearchParams*/} from "@angular/http";
/**
 * imports class rxjs/add/operator/catch
 */
import "rxjs/add/operator/catch";
/**
 * imports class rxjs/add/operator/map
 */
import "rxjs/add/operator/map";
/**
 * imports class Config
 */
import {Config} from "../app-constants";

/*
 Generated class for the BorrowInventoryItems page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
/**
 * Component loads view ´borrow-inventory-items.html´ and the seclector
 * ´page-borrow-inventory-items´
 */
@Component({
  selector: 'page-borrow-inventory-items',
  templateUrl: 'borrow-inventory-items.html'
})
/**
 * exports the class BorrowInventoryItemsPage
 */
export class BorrowInventoryItemsPage {

  /**
   * Comment for class ´BorrowInventoryItemsPage´
   * @param borrower Borrower is stored in ´borrower´
   * @type {{name: string}}
   */
  borrower = {name: ''}; // borrower data
  /**
   * Comment for class ´BorrowInventoryItemsPage´
   * @param barcodeData The barcode is stored in ´barcodeData´
   * @type {{name: object}}
   */
  barcodeData: BarcodeData; // barcode data
  /**
   * Comment for class ´BorrowInventoryItemsPage´
   * @param http Does the HTTP-GET to ´http´
   * Config.config.serverUrl + ':3000/api/inventory-items/borrow-items'
   * @type {{name: object}}
   */
  http: Http; // httpProvider

  /**
   * Comment for class ´BorrowInventoryItemsPage´
   * @constructor
   * @param navCtrl Is the navigationController ´navCtrl´
   * @param navParams Contains the navigation parameters and overhand it
   * to the class ´BorrowInventoryItemsPage´
   * @param http Is a http-provider
   * @param alertCtrl Is for any altert box that may appear
   */
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              http: Http,
              public alertCtrl: AlertController) {
    this.http = http; // http provider
    this.barcodeData = navParams.get('details'); // barcode data in navParams
  }

  /**
   * Write the string ionViewDidLoad BorrowInventoryItemsPage to the
   * console ´ionViewDidLoad´
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowInventoryItemsPage');
  }

  /**
   * The
   */
  submitBorrower() {
    // send changes to api
    var url = Config.config.serverUrl + ':3000/api/inventory-items/borrow-items';
    var params = '?barcode=' + this.barcodeData.text.toString() + '&borrower=' + this.borrower.name;
    //let params: URLSearchParams = new URLSearchParams();
    //params.set('barcode', this.barcodeData.text.toString());
    //params.set('borrower', this.borrower.name);

    //let requestOptions = new RequestOptions();
    //requestOptions.search = params;

    // send borrower to api
    this.http.get(url + params)
    //this.http.get(url,  requestOptions)
      .map((response) => response.json()) // result is converted to JSON
      .subscribe(data => {
          var message = ''; // message in alert window

        // if there is a value then take first text
          if (data[0] == 1) {
            message = 'The item is borrowed by you!';
          }
          else {
            message = 'This inventory-Item has not been found!';
          }

          // prepare alert window
          let alert = this.alertCtrl.create({
            title: 'Borrow Results',
            message: message,
            buttons: ['OK']
          });

          // show alert window
          alert.present();
        },
        error => {
          // log error
          console.log(error);

          // prepare alert window
          let alert = this.alertCtrl.create({
            title: 'Borrow Error',
            message: 'The barcode is not valid!',
            buttons: ['OK']
          });

          // show alert window
          alert.present();
        }
      );
  }


}
