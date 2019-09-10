import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/reducers/app.reducers';
import { ChangeCurrentTheme } from 'src/app/core/store/actions/config.actions';

// Services
import { LocalStorageService } from 'src/app/core/services/local/local-storage.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private _store: Store<IAppState>,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
  }

  onChangeTheme(theme: string) {
    this.localStorageService.addData(LocalStorageService.KEY.currentTheme, theme);
    this._store.dispatch(new ChangeCurrentTheme(theme));
  }

}
