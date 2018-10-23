import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { User } from '../view-models/user';
import { Pledge } from '../view-models/pledge';
import { Item } from '../view-models/item';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppDataService {

  private users : Array<User> = [
    { id: 1, name:"Peter",  score: 87.67 },
    { id: 2, name:"Abby",   score: 83.29 },
    { id: 3, name:"Kamila", score: 82.4 },
    { id: 4, name:"Rochelle", score: 81.78 },
    { id: 5, name:"Sumit", score: 81.47 },
    { id: 6, name:"Masood", score: 80.47 },
    { id: 7, name:"Bobby", score: 79.09 },
    { id: 8, name:"Tim", score: 78.32 },
    { id: 9, name:"Cecilia", score: 78.09 },
    { id: 10, name:"Veer", score: 78.04 }
  ];

  private pledges : Array<Pledge> = [
    { id: 1, name:"I will reduce the amount of one time use coffee cups I use",  epiIndex: 50 },
    { id: 2, name:"I will reduce the amount of plastic utensils I use",   epiIndex: 40 },
    { id: 3, name:"I will reduce the amount of takeout boxes I use", epiIndex: 60 },
    { id: 4, name:"I will reduce the amount of plastic bags I use", epiIndex: 45 },
    { id: 5, name:"I will recycle", epiIndex: 30 },
    { id: 6, name:"I will bring my own shopiing bag for groceries", epiIndex: 40 },
    { id: 7, name:"I will bring my own container for takeaways", epiIndex: 50 },
    { id: 8, name:"I will avoid single use plastics", epiIndex: 15 },
    { id: 9, name:"I will stop using plastic umbrella covers", epiIndex: 25 },
    { id: 10, name:"I will say no to plastic straws", epiIndex: 33 },
    { id: 11, name:"I will share the video \"Start Small, Start Now: HK\'s Plastic Story\" with my friends and family", epiIndex: 40 }
  ];

  private items : Array<Item> = [
    { id: 1, name:"PlasticCup",  count: 0, points: 0, metric: 50  },
    { id: 2, name:"SoupCup", count: 0, points: 0, metric: 40  },
    { id: 3, name:"PaperCup", count: 0, points: 0, metric: 50  },
    { id: 4, name:"Chopsticks", count: 0, points: 0, metric: 10  },
    { id: 5, name:"Fork", count: 0, points: 0, metric: 10  },
    { id: 6, name:"Spoon", count: 0, points: 0, metric: 10  },
    { id: 7, name:"Knife", count: 0, points: 0, metric: 10  },
    { id: 8, name:"PlasticBag", count: 0, points: 0, metric: 20  },
    { id: 9, name:"TakeoutBox", count: 0, points: 0, metric: 30  },
    { id: 10, name:"UmbrellaCover", count: 0, points: 0, metric: 20  }
  ];

  private missedDays : Array<String> = [
     "08 Oct 2018" ,
     "07 Oct 2018" ,
     "06 Oct 2018" ,
     "05 Oct 2018" ,
     "03 Oct 2018" ,
     "02 Oct 2018" 
  ];

  constructor(private userService: UserService) {
  }
  
  getUsers() : Observable<any> {
    return of(this.users);
  }

  getMissedDays() : Observable<any> {
    return of(this.missedDays);
  }

  getItems() : Observable<any> {
    return of(this.items);
  }

  createPledge(vm: Pledge) : Observable<any> {    
    let id = 0;
    this.pledges.forEach(c => { if (c.id >= id) id = c.id+1 });
    vm.id = id;
    this.pledges.push(vm);
    return of(vm);
  }

  deletePledge(id: number) : Observable<any> {    
    return of({}).delay(2000)
     .do(e => this.pledges.splice(this.pledges.findIndex(c => c.id == id), 1));
  }

  getPledges() : Observable<any> {
    return of(this.pledges);
  }

  getUser(id: number) : Observable<User> {
    var user = this.users.find(c => c.id == id);
    return of(user);
  }  

  getPledge(id: number) : Observable<Pledge> {
    var pledge = this.pledges.find(c => c.id == id);
    return of(pledge);
  }

  updatePledge(updatedPledge: Pledge) : Observable<any> {
    var pledge = this.pledges.find(c => c.id == updatedPledge.id);
    Object.assign(pledge, updatedPledge);
    return of(pledge).delay(2000);
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw(''));
  }
  
}
