import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/core/service/event.service';
import { AuthenticationService } from 'src/app/core/service/auth.service';
import { MenuItem } from 'sec/applayout/shared/models/menu.model';
import { findAllParent, findMenuItem } from 'src/app/layout/shared/helper/utils';
i
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
  menuItemsProducts: MenuItem[] = [];
  menuList:any = []
  textDir: string = 'ltr';

  productSet:any = null
  products:any = null

  qry: QueryRef<any>;
  private querySubscription: Subscription;

  qryProducts: QueryRef<any>;
  private querySubscriptionProducts: Subscription;

  httpOptions:any = null
  holdings: any=null;
  loading: boolean;


  constructor (
    router: Router,
    private configurationService:ConfigurationService,
    private authService: AuthenticationService,
    private eventService: EventService,
    private memberService: MemberService,
    private loggerService: LoggerService,
    private tableService: TablesService,
    private apollo: Apollo,
    
    
    ) {
      this.memberData = this.memberService.getMemberData()
      if(this.memberData !==null && this.memberData.languageId === 5)this.textDir = 'rtl'
      this.projectName = localStorage.getItem('projectName')
      this.productName = localStorage.getItem('productName')
      this.productSet =  JSON.parse(localStorage.getItem('productSet'))
      this.getProductSet()
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
    if(this.memberData.member !=='member_operator_seed') this.menuItems =  MENU_ITEMS_INS_PRODUCTS.filter(res => res.show === true)
    // if(this.memberData.member === 'member_operator_seed')alert()
    if (this.projectName==='payton')this.menuItems = MENU_ITEMS_PAYTON.filter(res => res.show === true)
    
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

    this.getHoldings()
  }


  getHoldings(): void {


    this.qry = this.apollo.watchQuery<any>({
      query: InStateRead,
      pollInterval: 5000,
      context: {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.memberData.token,
          token: this.memberData.token
        })
      },
      variables: {
        key: this.memberData.token,
        // role: this.operatorData.role,

        // command: "getOperatorHoldings",
        role:'member',
        command: "getHoldingsFundsMember",
        payload: {
          projectName:this.memberData.projectName

        }
      }
    });

    this.querySubscription = this.qry.valueChanges.subscribe(({ data, loading }) => {

   
      this.loading = loading
      this.holdings = data.inStateRead
      this.menuItems = this.menuItems.map(item =>{
        if(item.children !==undefined ){
        item.children = item.children.map(child => {
          console.log(`-${child.label}`)
          if(child.label==='Funds'){
            child.children = []
            this.holdings.map(holding =>{
              let holdingName = holding.symbol.toLowerCase().replace(/ /g, '_')
              child.children.push({
                key: `operator-financial-analytics-platform-analysis-funds-${holdingName}`,
                label: holding.symbol,
                labelHE: 'שארית ביניים',
                // icon: 'fe-pie-chart',
                parentKey: 'operator-financial-analytics-platform-analysis-funds',
                show: true,
                isInternal: true,
                isMember: false,
                isProduct: false,
                product: "securitization",
                link: `/operator/platform-analytics/redirect/claims/${holding.analysis}/${holding.symbol}`


              })


            })
          }

  
          return child
        })
        
        
        }  
        return item
        
      })
 
     
        
   
    }, (error) => {
      this.loggerService.logData(false, 'OperatorAnalyticsInterimResidualComponentErr:89', error)
    });

  }

  getProductSet(){
    this.qryProducts = this.apollo.watchQuery<any>({
      query: InStateRead,
      context:this.httpOptions,
      pollInterval:60000,
      variables: {
        key:localStorage.getItem('operatorToken'),
        role:'operator',
        command:"getProductSet",
        payload: { 
          account:"5d21d64feeb4a107fc444b7d",
          
         }
      }
    });

    this.querySubscriptionProducts = this.qryProducts.valueChanges.subscribe(({ data, loading }) => {
        this.productSet = data.inStateRead
        if(this.productSet !== null){
          localStorage.setItem('productSet', JSON.stringify(this.productSet))
        }

    }, (error) => {
      this.loggerService.logData(false, 'LoginComponent:getMemberDataErr', error)
    
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

  if(item.label ==='Funds'){
    return this.tableService.checkProductSet(item, this.productSet)
  } 

  else if(item.label !=='Funds'){
    return this.tableService.checkProductSet(item, this.productSet)
  }  
  


 } 

 getExternalLink(menu:any){
    
   if(menu.label === 'Core Banking'){
    return this.configurationService.config.externalLinks.coreBanking
   }
   else if(menu.label === 'Smart Contracting'){
    return this.configurationService.config.externalLinks.smartContracting
   }
   else if(menu.label === 'IDM'){
    return this.configurationService.config.externalLinks.idm
   }
   else if(menu.label === 'Admin'){
    return this.configurationService.config.externalLinks.admin
   }
   else if(menu.label === 'Modeler'){
    return this.configurationService.config.externalLinks['modeler']
   }
   else if(menu.label === 'Tasks'){
    return this.configurationService.config.externalLinks.task
   }
   else if(menu.label === 'CRM'){
    return `${this.configurationService.config.urlWebApp}:8069`
    // return this.configurationService.config.externalLinks.engagement
   }
   else if(menu.label === 'Documents'){
    return this.configurationService.config.externalLinks.documents
   }
   else if(menu.label === 'Registry'){
    return this.configurationService.config.externalLinks.registry
   }
   else if(menu.label === 'DLT'){
    return this.configurationService.config.externalLinks.dlt
   }
   else if(menu.label === 'InState'){
    return this.configurationService.config.externalLinks.instate
   }
  //  else if(menu.label === 'Status'){
  //   return this.configurationService.config.externalLinks.status
  //  }
   else if(menu.label === 'Control'){
    return `${this.configurationService.config.urlWebApp}:2052`
    // return this.configurationService.config.externalLinks.status
   }
   else if(menu.label === 'Monitoring'){
    return `${this.configurationService.config.urlWebApp}:2053`
   }
   else if(menu.label === 'Alerts'){
    return `${this.configurationService.config.urlWebApp}:9093`
   }
   else if(menu.label === 'Dashboard'){
    return `${this.configurationService.config.urlWebApp}:2060`
   }
    
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
