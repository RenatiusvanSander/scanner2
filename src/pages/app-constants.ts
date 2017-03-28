/**
 * Created by remy on 15/03/17.
 */
var config = {
  "development": {
    "serverUrl": 'http://192.168.2.116',
    "barcodeOptions": {
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
  },
  "developmentScratLab": {
    "serverUrl": 'http://192.168.178.20',
    "barcodeOptions": {
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
  },
  "staging": {
    "serverUrl": 'http://192.168.1.211',
    "barcodeOptions": {
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
  },
  "production": {
    "serverUrl": 'http://localhost',
    "barcodeOptions": {
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
  }
};
export class Config {
  static config = config['developmentScratLab'];
}
