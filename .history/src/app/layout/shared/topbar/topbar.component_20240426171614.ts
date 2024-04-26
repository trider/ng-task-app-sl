import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/auth.service';
import { EventService } from 'src/app/core/service/event.service';
import { LEFT_SIDEBAR_TYPE_CONDENSED, LEFT_SIDEBAR_TYPE_DEFAULT } from '../config/layout.model';
import { Language } from '../models/language.model';
import { MegaMenuItem } from '../models/mega-menu.model';
import { NotificationItem } from '../models/notification.model';
import { SearchResultItem, SearchUserItem } from '../models/search.model';
import { Observable, Subscription } from 'rxjs';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { TopbarMenu } from './topbarMenu';
import { TopBarProfileOptions } from './topBarProfileOptions';
import { FormGroup, FormControl } from '@angular/forms';
import { Languages } from './languages';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MENU_ADMIN } from './menu-admin';





@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() layoutType: string = '';
  @Input() leftSidebarTheme: string = 'light';
  @Input() rowName: string = "rowData"
  @Input() isRow: boolean = true
  @Input() memberId: string = 'member'
  @Output() mobileMenuButtonClicked = new EventEmitter();
  @Output() settingsButtonClicked = new EventEmitter<boolean>();

  textDir: string = 'rtl';
  createMenuOptions: any = TopbarComponent;
  megaMenuItems: MegaMenuItem[] = [];
  notificationList: NotificationItem[] = [];
  languages: any = Languages
  apps: any = TopbarMenu;
  profileOptions: any = TopBarProfileOptions;
  selectedLanguage?: Language;
  searchResults: SearchResultItem[] = [];
  searchUsers: SearchUserItem[] = [];
  memberData: any = null
  operatorData: any = null
  projectName: string = 'instate'
  loggedInUser: any = null;
  topnavCollapsed: boolean = false;
  title: string = 'Details'

  loading: boolean = false

  

  constructor(
    private router: Router,
    private eventService: EventService,

  ) {

    document.addEventListener('fullscreenchange', this.exitHandler);
    document.addEventListener("webkitfullscreenchange", this.exitHandler);
    document.addEventListener("mozfullscreenchange", this.exitHandler);
    








  }



  ngOnInit(): void {

 


  }

  

  changeSidebarWidth(): void {
    if (document.body.hasAttribute('data-sidebar-size') && document.body.getAttribute('data-sidebar-size') === "condensed") {
      this.eventService.broadcast('changeLeftSidebarType', LEFT_SIDEBAR_TYPE_DEFAULT);
    }
    else {
      this.eventService.broadcast('changeLeftSidebarType', LEFT_SIDEBAR_TYPE_CONDENSED);
    }


  }
  exitHandler(): void {
    let document: any = window.document;

    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
      document.body.classList.remove('fullscreen-enable');
    }
  }
  toggleFullScreen(): void {
    let document: any = window.document;

    document.body.classList.toggle('fullscreen-enable');

    let elem = document.querySelector('.maximize-icon');

    if (elem.hasAttribute('data-toggle') && document.body.getAttribute('data-toggle') === "fullscreen") {
      document.body.removeAttribute('data-toggle');
    }
    else {
      elem.setAttribute('data-toggle', 'fullscreen')
    }

    if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }
  toggleMobileMenu(event: any) {
    this.topnavCollapsed = !this.topnavCollapsed;
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }
 




}
