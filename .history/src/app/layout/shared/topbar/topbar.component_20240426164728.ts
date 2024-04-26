import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/auth.service';
import { EventService } from 'src/app/core/service/event.service';
import { LEFT_SIDEBAR_TYPE_CONDENSED, LEFT_SIDEBAR_TYPE_DEFAULT } from '../config/layout.model';
import { Language } from '../models/language.model';
import { MegaMenuItem } from '../models/mega-menu.model';
import { NotificationItem } from '../models/notification.model';
import { SearchResultItem, SearchUserItem } from '../models/search.model';
import { MemberService } from 'src/app/services/member.service';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { LoggerService } from 'src/app/services/logger/logger.service'
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { OperatorService } from 'src/app/services/operator.service';
import { TopbarMenu } from './topbarMenu';
import { TopBarProfileOptions } from './topBarProfileOptions';
import { ConfigurationService } from 'src/app/config/configuration.service'
import { ModalWizardDialogComponent } from '../../../components/wizards/modals/modal-wizard-dialog/modal-wizard-dialog.component'
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Languages } from './languages';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InStateRead } from 'src/app/services/instate/schema/query';
import { InStateRun } from 'src/app/services/instate/schema/mutations';
import { TableMemberDataVaultInstate } from 'src/app/common/tableData/member/accounts/tableMemberDataVaultInstate';
import { TableMemberDataVaultUpecos } from 'src/app/common/tableData/member/accounts/tableMemberDataVaultUpecos';
import { MENU_ADMIN } from './menu-admin';
import { StandardModalComponent } from 'src/app/components/dialogs/modals/standard-modal/standard-modal.component';
import { TablesService } from 'src/app/services/tables/tables.service';

const MEMBER_DATA = gql`{  memberData @client }`;
const MEMBER_LOAN_QUOTE = gql`{  memberLoanQuote @client }`;
const MEMBER_INVESTMENT_REQUEST = gql`{  memberInvestmentRequest @client }`;
const MEMBER_ACCOUNTS = gql`{  memberAccounts @client }`;
const USER_LOGIN_STATUS = gql`{  userLoginStatus @client }`;
const USER_LOGIN_PROGRESS = gql`{  userLoginProgress @client }`;;
const MEMBER_DLT_ACCOUNT = gql`{  memberDLTAccount @client }`;



@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {

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

  qry: QueryRef<any>;
  querySubscription: Subscription;
  selectedTaskId: string = null

  memberWallet:any = null
  memberCash:number = 0



  selectedTaskIdAdmin: string = null
  querySubscriptionTasksAdmin: Subscription;
  row: any = null
  file: any = null
  members: any = null
  messages: any = null
  messageCount: number = 0
  messagesTotal: number = 0
  messagesMember: any = null
  messageCountMember: number = 0
  messagesTotalMember: number = 0
  messagesOperator: any = null
  messageCountOperator: number = 0
  messagesTotalOperator: number = 0
  flowablePath: string = null
  flowableCommandPath: string = null
  loanQuotes: any = null
  loanSaleQuotes: any = null
  pNoteRequests: any = null
  fundUnitRequests: any = null
  sNoteRequests: any = null
  tasks: any = null
  tasksAdmin: any = null
  approvedCount: number = 0
  approvedCountAdmin: number = 0
  updatingTask: boolean = false
  role: string = 'member'
  progressVal: number = 0
  term: any;
  filter: any;
  temp: any = null
  currQuoteId: string = null
  filterForm = new FormGroup({
    search: new FormControl()
  })
  dltAccount: any = null
  accounts: any = null
  baseTableCols: any = TableMemberDataVaultInstate
  token: string = '1111111'
  account: any = null
  memberAdminMenu: any = MENU_ADMIN
  balance: number = 0
  balanceDlt: number = 0;

  isOnboarded: boolean = false
  isOnboardedWallet: boolean = false
  balanceColor: string = 'silver'

  balanceForm = new FormGroup({
    balance: new FormControl(0)
  })

  class: string = 'navbar-custom-payton'
  updated: string;

  constructor(
    private router: Router,
    private eventService: EventService,
    private memberService: MemberService,
    private apollo: Apollo,
    private loggerService: LoggerService,
    private modalService: NgbModal,
    private configService: ConfigurationService,
    public dialog: MatDialog,
    private operatorService: OperatorService,
    public tablesService: TablesService
  ) {

    document.addEventListener('fullscreenchange', this.exitHandler);
    document.addEventListener("webkitfullscreenchange", this.exitHandler);
    document.addEventListener("mozfullscreenchange", this.exitHandler);
    this.role = localStorage.getItem('role')
    this.memberData = this.memberService.getMemberData()
    this.operatorData = this.operatorService.getOperatorData()
    this.flowablePath = this.configService.config.flowableAPI
    this.flowableCommandPath = `${this.configService.config.flowableTasksAPI}/tasks`
    this.selectedLanguage = this.languages[0]
    if(this.memberData.dlt !==null && this.memberData.dlt !==undefined)this.dltAccount = [this.memberData.dlt]

    try {
      this.projectName = localStorage.getItem('projectName')
      this.token = localStorage.getItem('token')
      if (this.role === 'member') {
        this.token = this.memberData.token;
        this.projectName = this.memberData.projectName
      }
      else if (this.role === 'operator') {
        this.token = this.operatorData.token;
        this.projectName = this.operatorData.projectName
      }

      localStorage.setItem('projectName', this.projectName)
    } catch (error) {
        this.projectName = 'instate'
        this.token = '111111'
    }








  }



  ngOnInit(): void {

    this.getLanguage()
    if (this.memberData.projectName !== 'upecos') {
      this.baseTableCols = this.baseTableCols.map(col => {
        if (col.name === 'Custom' && this.memberData.customToken !== undefined && this.memberData.customToken !== null) {
          col.name = this.memberData.customToken.value
          col.field = this.memberData.customToken.symbol
        }

        return col
      })
      this.getDLTDataIns()
    }
    else if (this.memberData.projectName === 'upecos') {

      this.getMemberDltYhd()
    }


  }

  getLanguage() {
    try {
      if (this.memberData !== null && this.memberData.languageId !== undefined)
        this.selectedLanguage = this.languages.reduce(acc => {
          return this.languages.filter(res => res.id === this.memberData.languageId).reduce((arr) => arr.concat(acc))
        })
    } catch (error) {
      this.selectedLanguage = this.languages[0]
      this.qry.refetch()
    }

  }


  updateMemberMessageCount(messageCountMember: number) {
    try {
      this.messageCountMember = messageCountMember
    } catch (error) {

    }
  }
  updateOperatorMessageCount(messageCountOperator: number) {
    try {
      this.messageCountOperator = messageCountOperator
    } catch (error) {

    }
  }
  updateMemberTasksCount(approvedCount: number) {
    this.approvedCount = approvedCount
  }
  updateOperatorTasksCount(approvedCountAdmin: number) {
    this.approvedCountAdmin = approvedCountAdmin
  }

  setMember(member: any) {
    this.memberData = member
    this.router.navigate(['/member/dashboard'])

    if (this.memberData.projectName !== 'instate') {
      this.getDLTDataIns()
    }
    else if (this.memberData.projectName === 'upecos') {

      this.getMemberDltYhd()
    }

    // this.memberData = this.memberService.getMemberData()
  }

  setMembers(members: any) {
    this.members = members

  }


  getCode() {
    return this.tablesService.getCode(this.memberData.projectName, this.memberData.languageId)
  }

  getSymbol() {
    return this.tablesService.getSymbol(this.memberData.projectName, this.memberData.languageId)

  }

  getDLTDataIns() {



    this.qry = this.apollo.watchQuery<any>({
      query: InStateRead,
      pollInterval: 60000,
      context: {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.memberData.token,
          token: this.memberData.token
        })
      },
      variables: {
        key: this.memberData.token,
        role: this.memberData.role,
        command: "getMemberDltAccount",
        payload: {
          path: "accounts",
          currency: 'USD',
          memberId: this.memberData.member,
          projectName: "instate",
          crmId:this.memberData.crmId

        },
      }
    });



    this.querySubscription = this.qry.valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading
      this.loggerService.logData(false, 'topBarDlt', data)

      setTimeout(() => {
        this.dltAccount = data.inStateRead
        if (this.dltAccount !== null) {
          this.balance = this.dltAccount.balance
          this.dltAccount = [data.inStateRead]

          this.apollo.client.writeQuery({ query: MEMBER_DLT_ACCOUNT, data: { memberDLTAccount: data.inStateRead } })
          const qry: any = this.apollo.client.readQuery({ query: MEMBER_DLT_ACCOUNT });
          this.loggerService.logData(false, 'OperatorAccountsDltNetworkComponent:111', qry)
          this.loggerService.displayMessage('DLT data updated', 2500, true)
          this.updated = new Date().toJSON().toString().replace('T', ' ').slice(0,19)
        }




      });





    }, (error) => {
      this.loggerService.logData(false, 'quotesErr', error)
      this.qry.refetch()

    });



  }




  getMemberDltYhd() {
    if (this.isOnboardedWallet) {
      this.qry = this.apollo.watchQuery<any>({
        query: InStateRead,
        // pollInterval: 60000,
        context: {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.memberData.token,
            token: this.memberData.token
          })
        },
        variables: {
          key: this.memberData.token,
          role: this.memberData.role,
          command: "getMemberDltWallet",
          payload: {
            memberId: this.memberData.member,
            projectName: "instate",
            isSummary: true
          },
        }
      });



      this.querySubscription = this.qry.valueChanges.subscribe(({ data, loading }) => {

        this.loggerService.logData(false, 'topBarDlt', data)

        this.loading = false

        setTimeout(() => {
          this.account = data.inStateRead
          if (this.account !== null) {
            this.apollo.client.writeQuery({ query: MEMBER_DLT_ACCOUNT, data: { memberDLTAccount: data.inStateRead } })
            const qry: any = this.apollo.client.readQuery({ query: MEMBER_DLT_ACCOUNT });
            this.loggerService.logData(false, 'OperatorAccountsDltNetworkComponent:111', qry)
            this.loggerService.displayMessage('DLT data updated', 2500, true)
            // this.balance = this.account.balance
            this.balance = this.account.transactionTotal
          }

        });







      }, (error) => {
        this.loggerService.logData(false, 'quotesErr', error)
        // this.qry.refetch()
      });
    }
  }




  openProductPage(notification: any) {
    if (notification.product === 'wallet') {
      this.router.navigate(['/member/accounts/wallet'])
    }
    else if (notification.product === 'loan') {
      this.router.navigate(['/member/accounts/loans'])
    }
    else if (notification.product === 'p-note' || notification.product === 's-note' || notification.product === 'fund-unit') {
      this.router.navigate(['/member/accounts/investments'])
    }
    else {
      if (notification.path !== null && notification.path.length > 0) this.router.navigate([notification.path])
    }

  }
  openPage(path: string) {
    if (path !== null && path.length > 0) this.router.navigate([path])

  }
  openWizard(actionType: string, selectedAction: string, size: string, stepNum: string = '') {
    this.dialog.open(ModalWizardDialogComponent, {
      minWidth: '700px',
      minHeight: '250px',
      disableClose: false,
      data: {
        actionType: actionType,
        selectedAction: selectedAction,
        setOpen: true,
        isNew: true,
        size: size,
        stepNum: stepNum,
        lastStep: '2'

      }
    });




  }
  onSubmit(): void {
    const formData: any = this.filterForm.value
    const name: string = formData.search.toLowerCase()
    this.members = this.temp
    this.members = this.members.filter(res => res.member.toLowerCase().includes(name) || res.accountName.toLowerCase().includes(name))

  }
  clearSearch() {
    this.members = this.temp
  }
  selectLanguage(language: any) {
    this.selectedLanguage = language
    let memberData: any = { ...this.memberData }
    memberData.languageId = this.selectedLanguage.id
    sessionStorage.setItem('memberData', JSON.stringify(memberData))
    location.reload()
    this.apollo.mutate({
      mutation: InStateRun,
      variables: {
        key: this.memberData.token,
        role: this.memberData.role,
        command: "memberDataUpdate",
        payload: {
          db: "graphDB",
          collection: "membersList",
          query: { member: this.memberData.member },
          payload: { languageId: this.selectedLanguage.id }
        }

      },

    }).subscribe((resp) => {
      this.loggerService.displayMessage('Member Data Updated', 2000, true)
      this.loggerService.logData(false, 'memberData', resp)
      this.loading = false

      try {
        location.reload()
      } catch (error) {
        this.router.navigate([`/${this.role}/dashboard`])
      }

    }, (error) => {
      this.loggerService.logData(false, 'TopbarComponent:540', error)
     
    });
  }


  openModal(content, row: any) {
    this.row = row
    this.modalService.open(content, { size: 'lg', scrollable: true })
  }
  openModalVault(content) {
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true })
  }
  openModalFile(content, file: any) {
    this.file = file
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true })

  }

  getAccountPath(val: any) {
    if (val.tableType === 'wallet') {
      return `accounts/${val.item.name}/cash`
    }
    else if (val.tableType === 'loans') {
      return `tables/obligation?borrower=${val.item.name}`
    }
    else if (val.tableType === 'pNotes') {
      return `tables/claim?investor=${val.item.name}`
    }
    else if (val.tableType === 'fundUnits') {
      return `tables/claim?investor=${val.item.name}`
    }


  }
  openProfilePage() {
    // this.router.navigate(['/administration/accounts/clients/client', this.clientAccount.account.id])
  }

  openDialogDLT(val: any, controlType:string='dltMember', minWidth:number = 700,minHeight:number=350) {
    let payload:any = null
    this.modalService.dismissAll()
    if(controlType==='details'){
      payload =  { 
        controlType:controlType,
        showClose:true,
        row:val
      }
    }
    
    else{
      minWidth =1250,
      payload =  { 
        controlType:controlType,
        // showClose:true,
        id: val.item.name,
        title:val.tableType,
        tableType: val.tableType,
        investment: val.item,
        path: this.getAccountPath(val),

      }
    }
    this.openStandardModal(payload, minWidth, minHeight)


  }



  openDialog(actionType: string, selectedAction: string, data: any = null, size: string, stepNum: string = '') {
    this.dialog.open(ModalWizardDialogComponent, {
      minWidth: '700px',
      minHeight: '250px',
      autoFocus: true,
      disableClose: false,
      data: {
        actionType: actionType,
        selectedAction: selectedAction,
        setOpen: true,
        isNew: false,
        size: size,
        stepNum: stepNum,
        lastStep: '2'

      }
    });

    // dialogRef.afterClosed().subscribe(result => {});
  }

  openStandardModal(payload, minWidth:number,minHeight:number) {

 
    let dialogRef: any = this.dialog.open(StandardModalComponent, {
      minWidth: minWidth,
      minHeight: minHeight,
      disableClose:false,
      data: payload
    });


    dialogRef.afterClosed().subscribe(result => {
 
      


    });
  }


  getAccount(content, account: any) {

    // this.apollo.client.writeQuery({ query: MEMBER_DATA, data: { memberData: null } })
    this.loggerService.logData(false, 'account', account)


    this.memberData = this.operatorData.members.memberList.reduce(acc => {
      return this.operatorData.members.memberList.filter(res => res.member === account.member).reduce((arr) => arr.concat(acc))
    })
    this.loggerService.logData(false, 'memberData', this.memberData)
    this.modalService.open(content, { centered: true, scrollable: true })
    localStorage.setItem('userEmail', this.memberData.email)
    let payload: any = {}
    payload.email = this.memberData.email
    payload.password = this.memberData.password
    payload.role = 'member'
    payload.analyticsAccount = this.memberData.analyticsAccount
    payload.isLogin = false

    // sessionStorage.removeItem('memberData')
    sessionStorage.setItem('memberData', JSON.stringify(this.memberData));
    // this.operatorService.memberLogin(payload)
    this.apollo.client.writeQuery({ query: USER_LOGIN_STATUS, data: { userLoginStatus: 'Member Credentials:Authenticated' } })
    this.apollo.client.writeQuery({ query: USER_LOGIN_PROGRESS, data: { userLoginProgress: 100 } })
    this.memberData = this.memberService.getMemberData()
    this.router.navigate(['/operator/dashboard'])
    location.reload()


  }
  getStatus() {
    const qry: any = this.apollo.client.readQuery({ query: USER_LOGIN_STATUS });
    return qry.userLoginStatus
  }
  getProgress() {
    const qry: any = this.apollo.client.readQuery({ query: USER_LOGIN_PROGRESS });
    this.progressVal = parseInt(qry.userLoginProgress.toString())
    if (this.progressVal > 95) this.modalService.dismissAll()
    return parseInt(qry.userLoginProgress.toString())

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
  ngOnDestroy() {

    try {
      this.querySubscription.unsubscribe();


    } catch (error) {

    }


  }




}
