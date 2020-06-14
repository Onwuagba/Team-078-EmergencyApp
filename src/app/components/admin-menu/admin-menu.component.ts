import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {MenuController} from '@ionic/angular';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss'],
})
export class AdminMenuComponent
  implements OnInit {
  pages = [
    {
      title: 'Admin Dashboard',
      url: '/admin-dashboard',
    },
    {
      title: 'Add Danger',
      url: '/admin-add-danger',
    },
    // this Keeps spooling to infinity
    // {
    //   title: 'View Responders',
    //   url: '/view-respondant-list',
    // },
    {
      title: 'Add Responders',
      url: '/admin-add-responder',
    },
    {
      title: 'Add Unit',
      url: '/admin-add-unit',
    },
    // this Keeps spooling to infinity
    // {
    //   title: 'View Dangers',
    //   url: '/admin-view-dangers',
    // },
    {
      title: 'View Admin',
      url: '/view-admins',
    },
  ];

  selectedPath = '';

  constructor(
    private location: Location,
    private menu: MenuController,
    private router: Router
  ) {
    this.router.events.subscribe(
      (event: RouterEvent) => {
        this.selectedPath = event.url;
      }
    );
  }
  ngOnInit() {}

  toggleMenu() {
    this.menu.toggle('main-menu');
  }

  goBack() {
    this.location.back();
  }
}

// private menu: MenuController,
