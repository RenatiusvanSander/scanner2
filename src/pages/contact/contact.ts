/**
 * imports class Component
 */
import { Component } from '@angular/core';
/**
 * imports class NavController
 */
import { NavController } from 'ionic-angular';

/**
 * Componets loads the view template contact.html and the
 * selector page-contact
 */
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
/**
 * exports class ContactPage
 */
export class ContactPage {

  /**
   * class ´ContactPage´ constructs an object type of ContactPage
   * @constructor
   * @param navCtrl has the navigation controller for this class
   */
  constructor(public navCtrl: NavController) {

  }

}
