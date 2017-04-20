/**
 * import class Component
 */
import { Component } from '@angular/core';
/**
 * import class NavController
 */
import { NavController } from 'ionic-angular';

/**
 * Compoent loads a view about.html and the selector ´page-about´
 */
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
/**
 * exports class AboutPage
 */
export class AboutPage {

  /**
   * constructs an object of type ´AboutPage´
   * @param navCtrl constructs an object of type AboutPage
   */
  constructor(public navCtrl: NavController) {

  }

}
