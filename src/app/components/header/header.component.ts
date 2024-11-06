import { Component, Inject } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // isAuthenticated$ = this.auth.isAuthenticated$;
  // profile$ = this.auth.user$;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router 
  ) {}

  login() {
    this.auth.loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/produtos`, 
      },
    });
  }

  logout() {
    this.auth.logout({
      logoutParams: { returnTo: this.document.location.origin },
    });
  }
}
