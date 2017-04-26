import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";

import { Timer } from "./timer";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    timer: Timer;

    constructor(
        private page: Page,
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.timer = this.itemService.getTimer();
        // console.dump(this.timer);
    }
}
