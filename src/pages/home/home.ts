import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import {ScanPage} from '../scan/scan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scanPage = ScanPage;

  constructor(public navCtrl: NavController) {
  }

  // scan the barcode after click on button
  scanBarcode() {

    // start barcode scan
    BarcodeScanner
      .scan(
        {
          preferFrontCamera: false, // iOS and Android
          showFlipCameraButton: true, // iOS and Android
          showTorchButton: true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          prompt: "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats: 'QR_CODE, DATA_MATRIX, UPC_E, UPC_A, EAN_8, EAN_13, CODE_128, CODE_39, ITF', // default: all
          orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations: false, // iOS
        }
      )
      .then(function scanSuccess(scanResult) {
        // Success! Barcode data is here

        //log to console
        console.log(scanResult.text);
        console.log(scanResult.format);
        console.log(scanResult.cancelled);

        // does not work without const
        var barcodeData = new BarcodeData(scanResult.text, scanResult.format);

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
    this.scanDetails(new BarcodeData('FAKE SCAN', 'FAKE_FORMAT'));
  }
}

// export the data
export class BarcodeData {
  constructor(public text: String,
              public format: String) {
  }
}

