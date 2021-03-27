import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../shared/language.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  userMenu = [ { title: 'Profile', icon: 'person-outline' }, { title: 'Log out', icon: 'power-outline' } ];

  LanguageMenu = [ { title: 'ar' }, { title: 'en' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private translate: TranslateService,
              private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.menuService.onItemClick().subscribe(( event ) => {
      if(event.item.title == 'ar' || event.item.title == 'en'){
        this.changeLanguage(event.item.title);
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  changeLanguage(lang: string){
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.languageService.detectChange.emit(lang);
    localStorage.setItem('lang', lang);
  }

}
