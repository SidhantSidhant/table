import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: {name : string, count ?: number}[] = [
    { name: "Leanne Graham" }, { name: "Leanne Graham" },
    { name: "Romaguera-Crona" },
    { name: "Ervin Howell" },
    { name: "Deckow-Crist" },
    { name: "Clementine Bauch" },
    { name: "Romaguera-Jacobson" },
    { name: "Patricia Lebsack" },
    { name: "Robel-Corkery" },
    { name: "Chelsey Dietrich" },
    { name: "Keebler LLC" },
    { name: "Mrs. Dennis Schulist" },
    { name: "Considine-Lockman" },
    { name: "Kurtis Weissnat" },
    { name: "Johns Group" },
    { name: "Nicholas Runolfsdottir V" },
    { name: "Abernathy Group" },
    { name: "Glenna Reichert" },
    { name: "Yost and Sons" },
    { name: "Clementina DuBuque" },
    { name: "Hoeger LLC" },
    { name: "Leanne Graham" },
    { name: "Romaguera-Crona" },
    { name: "Ervin Howell" },
    { name: "Deckow-Crist" },
    { name: "Clementine Bauch" },
    { name: "Romaguera-Jacobson" },
    { name: "Patricia Lebsack" },
    { name: "Robel-Corkery" },
    { name: "Chelsey Dietrich" },
    { name: "Keebler LLC" },
    { name: "Leanne Graham" },
    { name: "Romaguera-Crona" },
    { name: "Ervin Howell" },
    { name: "Deckow-Crist" },
    { name: "Clementine Bauch" },
    { name: "Romaguera-Jacobson" },
    { name: "Patricia Lebsack" },
    { name: "Robel-Corkery" },
    { name: "Chelsey Dietrich" },
    { name: "Keebler LLC" },
    { name: "Mrs. Dennis Schulist" },
    { name: "Considine-Lockman" },
    { name: "Kurtis Weissnat" },
    { name: "Johns Group" },
    { name: "Nicholas Runolfsdottir V" },
    { name: "Abernathy Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Johns Group" },
    { name: "Glenna Reichert" },
    { name: "Yost and Sons" },
    { name: "Clementina DuBuque" },
    { name: "Hoeger LLC" },
    { name: "Leanne Graham" },
    { name: "Romaguera-Crona" },
    { name: "Ervin Howell" },
    { name: "Deckow-Crist" },
    { name: "Clementine Bauch" },
    { name: "Romaguera-Jacobson" },
    { name: "Patricia Lebsack" },
    { name: "Robel-Corkery" },
    { name: "Chelsey Dietrich" },
    { name: "Keebler LLC" },

  ]

  constructor() { }

 getUsers(){
   return of(this.users);
 }
 
}
