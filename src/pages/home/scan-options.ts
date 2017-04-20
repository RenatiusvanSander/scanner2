/*
{
  "scanOptions": {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": "true",
    "preferFrontCamera": "false",
    "showFlipCameraButton": "true",
    "showTorchButton": "true",
    "torchOn": "true",
    "prompt": "Place a barcode inside the scan area",
    "resultDisplayDuration": "500",
    "formats": "QR_CODE, DATA_MATRIX, UPC_E, UPC_A, EAN_8, EAN_13, CODE_128, CODE_39, ITF",
    "orientation": "landscape",
    "disableAnimations": "false"
  }*/
/**
 * exports the static class ´BarcodeScannerOptions´
 * The class stores the static barcode scanner
 * options
 */
export class BarcodeScannerOptions {

  /**
   * Prefer front camera. Supported on iOS and Android.
   */
  preferFrontCamera: false;

  /**
   * Show flip camera button. Supported on iOS and Android.
   */
  showFlipCameraButton: true;

  /**
   * Show torch button. Supported on iOS and Android.
   */
  showTorchButton: true;

  /**
   * Disable animations. Supported on iOS only.
   */
  disableAnimations: false;

  /**
   * Disable success beep. Supported on iOS only.
   */
  disableSuccessBeep: true;

  /**
   * Prompt text. Supported on Android only.
   */
  prompt: 'Place a barcode inside the scan area';

  /**
   * Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`.
   */
  formats: 'QR_CODE, DATA_MATRIX, UPC_E, UPC_A, EAN_8, EAN_13, CODE_128, CODE_39, ITF';

  /**
   * Orientation. Supported on Android only. Can be set to `portrait` or `landscape`. Defaults to none so the user can rotate the phone and pick an orientation.
   */
  orientation: 'landscape';

  /**
   * Launch with the torch switched on (if available). Supported on Android only.
   */
  torchOn: true;

  /**
   * Display scanned text for X ms. 0 suppresses it entirely, default 1500. Supported on Android only.
   */
  resultDisplayDuration: 500;

}
