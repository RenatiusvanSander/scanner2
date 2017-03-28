import {Component} from "@angular/core";
import {NavController, NavParams, AlertController} from "ionic-angular";
import {BarcodeData} from "../home/home";
import {Http/*, RequestOptions, URLSearchParams*/} from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {Config} from "../app-constants";

/*
 Generated class for the BorrowInventoryItems page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-borrow-inventory-items',
  templateUrl: 'borrow-inventory-items.html'
})
export class BorrowInventoryItemsPage {

  borrower = {name: ''}; // borrower data
  barcodeData: BarcodeData; // barcode data
  http: Http; // httpProvider

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              http: Http,
              public alertCtrl: AlertController) {
    this.http = http; // http provider
    this.barcodeData = navParams.get('details'); // barcode data in navParams
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowInventoryItemsPage');
  }

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
