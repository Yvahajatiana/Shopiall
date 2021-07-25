import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/token-storage.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: User;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
  }

  /**
   * Sidebar toggle on hamburger button click
   */
  toggleSidebar(e) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }

  /**
   * Logout
   */
  onLogout(e) {
    e.preventDefault();
    this.tokenService.signOut();
    this.router.navigate(['/authentication/login']);
  }
}
