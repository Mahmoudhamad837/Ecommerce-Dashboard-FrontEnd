import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  detectChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
}
