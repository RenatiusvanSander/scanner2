/**
 * imports class Http
 */
import {Component} from '@angular/core';
/**
 * imports class Http
 */
import {NavController /*, AlertController*/} from 'ionic-angular';
/**
 * imports class Http
 */
import {BarcodeScanner} from 'ionic-native';
/**
 * imports class Http
 */
import {ScanPage} from '../scan/scan';
/**
 * imports class Http
 */
import {BorrowInventoryItemsPage} from '../borrow-inventory-items/borrow-inventory-items';
/**
 * imports class Http
 */
import {ReturnInventoryItemsPage} from '../return-inventory-items/return-inventory-items';
/**
 * imports class Http
 */
import {Config} from '../app-constants';

/**
 * Component loads view template home.html and the seclector will be
 * page-home
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
/**
 * exports class HomePage
 */
export class HomePage {

  /**
   * belongs to class ´HomePage´
   * @Param ScanPage containsthe page for the scan result tab
   * @type {ScanPage}
   */
  scanPage = ScanPage;
  /**
   * belongs to class ´HomePage´
   * @Param borrowPage is a page object to load and opens the
   * BorrowInventoryItemPage
   * @type {BorrowInventoryItemsPage}
   */
  borrowPage = BorrowInventoryItemsPage; // short them
  /**
   * belongs to class ´HomePage´
   * a button loads the a view and controller over
   * ReturnInventoryItemsPage object
   * @param returnPage is the view and controller for a return of an
   * inventory-item
   * @type {ReturnInventoryItemsPage}
   */
  returnPage = ReturnInventoryItemsPage; // short them

  /**
   * constructor belongs to class ´HomePage´
   * @constructor
   * @param navCtrl brings a navigation controller nad starts the page view
   */
  constructor(public navCtrl: NavController /*, public alertCtrl: AlertController */) {
  }

  /**
   * belongs to class ´HomePage´
   * method scans a barcode and saves data into a BarcodeData object
   * then the scanDetails methode stores information in the nav Params
   */
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

  /**
   * belongs to class ´HomePage´
   * the method scanDetails stores the BarcodeData object
   * into the navParams
   * @param details contains the barcode data
   */
  // see scanDetails
  scanDetails(details: BarcodeData) {
    this.navCtrl.push(this.scanPage, {details: details});
  }

  /**
   * belongs to class ´HomePage´
   * the method testFakeScan does has default BarcodeData object
   * for testing
   */
  // does a test faked scan
  testFakeScan() {
    // do a fake scan
    this.scanDetails(new BarcodeData('6789', 'FAKE_FORMAT'));
  }

  /**
   * belongs to class ´HomePage´
   * The method borrow inventory-items by a scanned barcode and Borrower's
   * name
   */
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

  /**
   * belongs to the class ´HomePage´
   * the method ´scanBarcodeReturnInventoryItem´ returns an inventory-item
   * by a barcode scan to the inventory-item and overwrite the borrower's
   * name to an empty string
   */
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

/**
 * exports the class ´BarcodeData´
 */
// export the data
export class BarcodeData {
  constructor(public text: String,
              public format: String) {
  }
}
