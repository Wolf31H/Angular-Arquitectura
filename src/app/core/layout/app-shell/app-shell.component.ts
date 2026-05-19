import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { NAVIGATION_ITEMS } from '../../constants/navigation.items';

@Component({
  selector: 'app-shell',
  imports: [NgFor, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
})
export class AppShellComponent {
  protected readonly navigationItems = NAVIGATION_ITEMS;
}
