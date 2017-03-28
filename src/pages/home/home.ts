import {Component} from '@angular/core';
import {NavController /*, AlertController*/} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import {ScanPage} from '../scan/scan';
import {BorrowInventoryItemsPage} from '../borrow-inventory-items/borrow-inventory-items';
import {ReturnInventoryItemsPage} from '../return-inventory-items/return-inventory-items';
import {Config} from '../app-constants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scanPage = ScanPage;
  borrowPage = BorrowInventoryItemsPage; // short them
  returnPage = ReturnInventoryItemsPage; // short them

  constructor(public navCtrl: NavController /*, public alertCtrl: AlertController */) {
  }

  // scan the barcode after click on button
  scanBarcode() {
    // start barcode scan
    BarcodeScanner
      .scan(Config.config.barcodeOptions)
      .then((scanResult) => {
        // Success! Barcode data is here

        // save data into barcodeData
        let barcodeData = new BarcodeData(scanResult.text, scanResult.format);

        //push the scanResult on ScanPage
        this.scanDetails(barcodeData);
      })
      .catch(function failure(err) {
        // An error occurred

        // log to console
        console.log(err);
      });
  }

  // see scanDetails
  scanDetails(details: BarcodeData) {
    this.navCtrl.push(this.scanPage, {details: details});
  }

  // does a test faked scan
  testFakeScan() {
    // do a fake scan
    this.scanDetails(new BarcodeData('6789', 'FAKE_FORMAT'));
  }

  // scanBarcode and borrow an inventory item
  scanBarcodeBorrowInventoryItem() {
    // borrow Item after barcodeScan

    // scan Barcode
    BarcodeScanner
      .scan(Config.config.barcodeOptions)
      .then((scanResult) => {
        // Success! Barcode data is here

        // save data into barcodeData
        //let barcodeData = new BarcodeData('6789', 'ItIsABarcode');
        let barcodeData = new BarcodeData(scanResult.text, scanResult.format);

        //push the scanResult on returnPage
        this.navCtrl
          .push(this.borrowPage, {details: barcodeData})
          .catch((err) => {
            // handle error
            console.log(err); // log error
            return false;
          });

      })
      .catch(function failure(err) {
        // An error occurred

        // log to console
        console.log(err);
      });

  }

  // scanBarcode and return the inventory item into pool
  scanBarcodeReturnInventoryItem() {
    // return an item to pool

    // scan Barcode
    BarcodeScanner
      .scan(Config.config.barcodeOptions)
      .then((scanResult) => {
        // Success! Barcode data is here

        // save data into barcodeData
        let barcodeData = new BarcodeData(scanResult.text, scanResult.format);
        //let barcodeData = new BarcodeData('6789', 'ItIsABarcode');

        //push the scanResult on returnPage
        this.navCtrl
          .push(this.returnPage, {details: barcodeData})
          .catch((err) => {

            // handle error
            console.log(err); // log error
            return false;
          });
      })
      .catch(function failure(err) {
        // An error occurred

        // log to console
        console.log(err);
      });
  }

}

// export the data
export class BarcodeData {
  constructor(public text: String,
              public format: String) {
  }
}
