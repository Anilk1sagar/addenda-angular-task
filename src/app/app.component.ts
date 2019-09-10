import { Component } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import { Store, select } from '@ngrx/store';
import { IAppState } from './core/store/reducers/app.reducers';
import { selectCurrentTheme } from './core/store/selectors/config.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-task-addenda';
  themeClass: string;

  constructor(
    private overlayContainer: OverlayContainer,
		private _store: Store<IAppState>,
  ) {}

  ngOnInit(): void {

    this._store.pipe(select(selectCurrentTheme)).subscribe((theme) => {
      this.themeClass = theme;
      this.onThemeChange(this.themeClass);
    });
  }

  onThemeChange(theme: string) {
    const bodyClasses = document.body.classList;
    const bodyClassToRemove = Array.from(bodyClasses).filter((item: string) => item.includes('-theme'));
    if (bodyClassToRemove.length) {
      bodyClasses.remove(...bodyClassToRemove);
      bodyClasses.add(theme);
    }

    // this.overlayContainer.getContainerElement().classList.add(theme);
    /* remove old theme class and add new theme class
    we're removing any css class that contains '-theme' string but your theme classes can follow any pattern */
    // const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    // const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    // if (themeClassesToRemove.length) {
    //   overlayContainerClasses.remove(...themeClassesToRemove);
    // }
    // overlayContainerClasses.add(theme);
  }

}
