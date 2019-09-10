import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

// Services
import { AuthService } from 'src/app/core/services/auth';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  _mLogOut() {
    const isLoggedOut = this.authService.logOut();

    if (isLoggedOut) {
      this.snackBar.open('Logout Successful!', null, {duration: 3000});
      this.router.navigateByUrl('/login');
    }
  }

}
