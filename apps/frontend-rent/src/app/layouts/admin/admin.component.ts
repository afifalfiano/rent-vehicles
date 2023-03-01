import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Event, NavigationEnd, NavigationError, NavigationStart, Route, Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
})
export class AdminComponent implements OnInit {
  title = 'Dashboard';
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            // Show progress spinner or progress bar
            console.log('Route change detected');
        }

        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            this.title = event.url;
            console.log(event);
        }

        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar

            // Present error to user
            console.log(event.error);
        }
    });
  }
}
