/**
 * imports class Component
 */
import { Component } from '@angular/core';
/**
 * imports class HomePage
 */
import { HomePage } from '../home/home';
/**
 * imports class AboutPage
 */
import { AboutPage } from '../about/about';
/**
 * imports class ContactPage
 */
import { ContactPage } from '../contact/contact';

/**
 * Components loads the view template tabs.html
 */
@Component({
  templateUrl: 'tabs.html'
})
/**
 * exports the tabsbar with the class ´TabsPage´
 */
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  /**
   * belongs to class ´TabsPage´
   * tab1Root loads the HomePage sign on the tabsbar
   * @type {HomePage}
   */
  tab1Root: any = HomePage;
  /**
   * belongs to class ´TabsPage´
   * tab2Root loads the HomePage sign on the tabsbar
   * @type {AboutPage}
   */
  tab2Root: any = AboutPage;
  /**
   * belongs to class ´TabsPage´
   * @type {ContactPage}
   */
  tab3Root: any = ContactPage;

  /**
   * belongs to class ´TabsPage´
   * @constructor
   * creates an object of type TabsPage and establishes a view
   */
  constructor() {}
}
