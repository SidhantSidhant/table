import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ANGULAR';
  usersArray: { name: string, count?: number }[] = []
  mySub !: Subscription

  constructor(private userervice: UserService) { }

  ngOnInit(): void {

    this.mySub = this.userervice.getUsers().subscribe(res => {
      this.usersArray = res;
      this.usersArray = this.usersArray.map((element, i) => {
        return { name: element.name, count: 0 }
      })
    })
    this.usersArray = this.getDuplicateListCount(this.usersArray);
  }

  getDuplicateListCount(user: any[]) {
    let nonDuplicateNamesList: string[] = [];
    let userList: { name: string, count: number }[] = [];
    user.forEach((item: any, index) => {
      if (nonDuplicateNamesList.includes(item.name)) {
        userList.forEach((ele, i) => {
          if (ele.name === item.name) {
            userList[i].count = userList[i].count + 1;
          }
        })
      } else {
        nonDuplicateNamesList.push(item.name);
        userList.push(item);
      }
    })
    return userList;
  }

  colors(count: number) {
    if (count > 0 && count < 3) {
      return 'red'
    } else if (count > 2 && count < 10) {
      return 'yellow'
    } else {
      return 'green'
    }
  }

  ngOnDestroy(): void {
    this.mySub.unsubscribe();
  }

}
