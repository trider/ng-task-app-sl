import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/core/service/event.service';
import { AuthenticationService } from 'src/app/core/service/auth.service';
import { MenuItem } from 'src/app/layout/shared/models/menu.model';
import { findAllParent, findMenuItem } from 'src/app/layout/shared/helper/utils';

import { 
  MENU_ITEMS_INS_PRODUCTS,
  // MENU_ITEMS_INS_PRODUCTS_MEMBERS,
  MENU_ITEMS_INS_PRODUCTS_SEED


} from 'src/app/layout/shared/config/menu-meta-ins-products'; 

import { Observable, Subscription } from 'rxjs';

// import feather from "feather-icons";


@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit, AfterViewInit {

  @Input() 
  @Input() navClasses: string | undefined;
  @Input() includeUserProfile: boolean = false;
  @Input() memberData:any = null

  productName:string = 'insLending'
  

  hasTwoToneIcons: boolean = false;
  isInitialized: boolean = false;

  leftSidebarClass = 'sidebar-enable';
  activeMenuItems: string[] = [];

  loggedInUser: any = {};
  projectName:string='instate'
  

  // menuItems: MenuItem[] = [];
  menuItems:any =null;



  constructor (
    router: Router,
    private authService: AuthenticationService,
    private eventService: EventService,

    
    
    ) {

     
      router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          this._activateMenu(); //actiavtes menu
          this.hideMenu(); //hides leftbar on change of route
        }
    });


  }



  ngOnInit(): void {
    //TODO: Automate menu creation
    this.menuItems =  MENU_ITEMS_INS_PRODUCTS_SEED.filter(res => res.show === true)
    
    
    this.loggedInUser = this.authService.currentUser();
    this.eventService.subscribe('toggleTwoToneIcons', (enable) => {
      this.hasTwoToneIcons = enable;
      if (this.hasTwoToneIcons) {
        document.body.setAttribute("data-sidebar-icon", "twotones");
      }
      else {
        document.body.removeAttribute("data-sidebar-icon");
      }
    });

  }




  ngOnChanges(): void {
    if (this.includeUserProfile) {
      document.body.setAttribute("data-sidebar-showuser", "true");
    }
    else {
      document.body.removeAttribute("data-sidebar-showuser");
    }
  }

 checkProductSet(item:any){


  


 } 



  

  /**
   * On view init - activating menuitems
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this._activateMenu();
    });
    // feather.replace();
  }

  /**
   * initialize menuitems
   */
  // initMenu(): void {
  //   if(this.memberData.role === 'operator'){
  //     this.menuItems = MENU_ITEMS;
  //   }
  //   else{
      
  //     this.menuItems = MENU_ITEMS_MEMBER;
  //   }
    
  // }

  /**
   * activates menu
   */
  _activateMenu(): void {
    const div = document.getElementById('side-menu');
    let matchingMenuItem = null;

    if (div) {
      let items: any = div.getElementsByClassName('side-nav-link-ref');
      for (let i = 0; i < items.length; ++i) {
        if (window.location.pathname === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }

      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute('data-menu-key');
        const activeMt = findMenuItem(this.menuItems, mid);
        if (activeMt) {

          const matchingObjs = [activeMt['key'], ...findAllParent(this.menuItems, activeMt)];

          this.activeMenuItems = matchingObjs;

          this.menuItems.forEach((menu: MenuItem) => {
            menu.collapsed = !matchingObjs.includes(menu.key!);
          });
        }
      }
    }
  }

  /**
   * toggles open menu
   * @param menuItem clicked menuitem
   * @param collapse collpase instance
   */
  toggleMenuItem(menuItem: MenuItem, collapse: NgbCollapse): void {
    collapse.toggle();
    let openMenuItems: string[];
    if (!menuItem.collapsed) {
      openMenuItems = ([menuItem['key'], ...findAllParent(this.menuItems, menuItem)]);
      this.menuItems.forEach((menu: MenuItem) => {
        if (!openMenuItems.includes(menu.key!)) {
          menu.collapsed = true;
        }
      })
    }

  }


  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasSubmenu(menu: MenuItem): boolean {
    return menu.children ? true : false;
  }


  /**
   * Hides the menubar
   */
  hideMenu() {
    document.body.classList.remove('sidebar-enable');
  }

}
