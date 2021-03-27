/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { LanguageService } from './shared/language.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  lang:string;
  constructor(
    private analytics: AnalyticsService, 
    private seoService: SeoService,
    private translate: TranslateService,
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    
    this.checkChange();
    this.languageService.detectChange.subscribe(
      res=>{
        localStorage.setItem('lang', res);
        this.checkChange();
        console.log("RES", res);
        location.reload();
      }
    );
  }

  checkChange() {
    this.lang = localStorage.getItem('lang');
    if(this.lang == 'en' || this.lang == null){
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
    }else{
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
    }
    
  }

}
