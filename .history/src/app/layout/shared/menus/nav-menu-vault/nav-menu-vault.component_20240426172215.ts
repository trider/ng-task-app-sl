import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu-vault',
  templateUrl: './nav-menu-vault.component.html',
  styleUrls: ['./nav-menu-vault.component.scss']
})
export class NavMenuVaultComponent implements OnInit, OnDestroy {

  @Input()
  






  constructor(

  
  ) {

   



   }

  ngOnInit(): void {



  
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
