import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './cricis';
import { CRISIS } from './mock-cricis';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrisis(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(CRISIS);
  }
    getHero(id: number | string) {
    return this.getCrisis().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Crisis[]) => heroes.find(Crisis => Crisis.id === +id))
    );
  }
}