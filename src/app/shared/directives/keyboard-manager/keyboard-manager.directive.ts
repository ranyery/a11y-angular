import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[app-keyboard-manager]' })
export class KeyboardManagerDirective {
  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('Up');
        break;
      case 'ArrowDown':
        console.log('Down');
        break;
      case 'ArrowLeft':
        console.log('Left');
        break;
      case 'ArrowRight':
        console.log('Right');
        break;
      default:
        break;
    }
  }
}
