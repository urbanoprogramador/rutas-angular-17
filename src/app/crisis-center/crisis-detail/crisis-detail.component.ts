import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { HeroService }  from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  crisis$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );
  }

  gotoHeroes(crisis: crisis) {
    let crisisId = crisis ? crisis.id : null;
    // Pass along the crisis id if available
    // so that the crisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
}