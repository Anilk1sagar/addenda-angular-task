import { Component } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task-addenda';

  themeClass = 'default-theme';

  constructor(
    private overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {

    this.overlayContainer.getContainerElement().classList.add(this.themeClass);
    // this.theme$ = this._store.pipe(select(selectEffectiveTheme));

  }

  onThemeChange(theme: string) {
    // console.log(theme);
    this.themeClass = theme;
    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(theme);
  }

}
