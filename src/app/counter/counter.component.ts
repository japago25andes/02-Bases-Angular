import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>
  {{counter}}
  </p>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy(option: number): void {

    this.counter += option;

  }

  resetCounter(): void {

    this.counter = 10;

  }

}
