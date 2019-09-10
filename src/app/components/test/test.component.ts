import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/reducers/app.reducers';
import { ChangeCurrentTheme } from 'src/app/core/store/actions/config.actions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private _store: Store<IAppState>,
  ) { }

  ngOnInit() {
  }

  onChangeTheme(theme: string) {
    this._store.dispatch(new ChangeCurrentTheme(theme));
  }

}
