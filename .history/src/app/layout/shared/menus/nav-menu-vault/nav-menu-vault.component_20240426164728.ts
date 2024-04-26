import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { LoggerService } from 'src/app/services/logger/logger.service'
import { OperatorService } from 'src/app/services/operator.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InStateRead } from 'src/app/services/instate/schema/query';
import { StandardModalComponent } from 'src/app/components/dialogs/modals/standard-modal/standard-modal.component';

@Component({
  selector: 'app-nav-menu-vault',
  templateUrl: './nav-menu-vault.component.html',
  styleUrls: ['./nav-menu-vault.component.scss']
})
export class NavMenuVaultComponent implements OnInit, OnDestroy {

  @Input()
  
  operatorData:any = null
  memberData:any = null
  accounts: any = null
  account: any = null
  loading: boolean = false
  httpOptions:any = null

  qry: QueryRef<any>;
  private querySubscription: Subscription;

  qryMember: QueryRef<any>;
  private querySubscriptionMember: Subscription;





  constructor(
    private apollo: Apollo,
    private loggerService:LoggerService,
    public dialog: MatDialog,
    private operatorService:OperatorService,
  
  ) {

    this.operatorData = this.operatorService.getOperatorData()



   }

  ngOnInit(): void {

    this.qryMember = this.apollo.watchQuery<any>({
      query: InStateRead,
      context:this.httpOptions,
      variables: {
        key:this.operatorData.token,
        role:'member',
        command:"getMember",
        payload: { 
          memberId:'member_fee_receiver', 
          
         }
      }
    });

    this.querySubscriptionMember = this.qryMember.valueChanges.subscribe(({ data, loading }) => {

      setTimeout(() => {
        this.memberData = data.inStateRead
        if(this.memberData !== null)this.getMemberDlt()
          
         

      })

    }, (error) => {
      this.loggerService.logData(false, 'LoginComponent:getMemberDataErr', error)
    
    });

  
  }

  getMemberDlt() {

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
          command: "getMemberDltWallet",
          payload: {
            memberId: this.memberData.member,
            projectName:"instate",
            isSummary: true
          },
        }
      });

      this.querySubscription = this.qry.valueChanges.subscribe(({ data, loading }) => {
        setTimeout(() => {
          this.loggerService.logData(false, 'topBarDlt', data)
          this.loading = false
          this.account = data.inStateRead

        });
      }, (error) => {
        this.loggerService.logData(false, 'quotesErr', error)
        // this.qry.refetch()
      });
    
  }

  openStandardModal() {
    
    
    let dialogRef: any = this.dialog.open(StandardModalComponent, {
      minWidth: 1200,
      minHeight: 200,
      disableClose: false,
      data: {
        controlType: 'dlt',
        displayType: 'fees',
        title: 'Fees',
        isDlt: true,
        account: this.account
      }
    });

    dialogRef.afterClosed().subscribe(result => {



    });
  }


  ngOnDestroy() {
    // this.querySubscription.unsubscribe();
  }

}
