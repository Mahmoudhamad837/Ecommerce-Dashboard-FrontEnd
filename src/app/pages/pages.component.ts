import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../shared/language.service';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit{
  public menu = [];

  constructor(
    private translate: TranslateService,
    private langService: LanguageService
  ) {

  }

  ngOnInit(): void {
    this.menu = MENU_ITEMS;
    this.translateMenu(this.menu);

    this.langService.detectChange.subscribe(
      res=>{
        console.log('ressssss', res);
        this.translateMenu(this.menu);
      }
    );
  }

  public translateMenu(menu: any[]) {
    menu.forEach((item:any) => {
      this.translate.get(item.title.toLowerCase()).subscribe(
        res=>{
          item.title = res;
        }
      );
    });
  }
  
}
