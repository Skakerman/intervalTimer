import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";

import { Timer } from "./timer";
import { TimerService } from "./timer.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    timer: Timer;

    constructor(
        private page: Page,
        private timerService: TimerService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.timer = this.timerService.getTimer();
        // console.dump(this.timer);
    }
}
