import { Component, OnInit } from "@angular/core";
import { MAIN_MENU } from "../../utils/menu";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  MAIN_MENU = MAIN_MENU;
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
