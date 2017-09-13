import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";

import { Timer } from "./timer";
import { TimerService } from "./timer.service";

import { setInterval, setTimeout, clearInterval } from "timer";

@Component({
    selector: "timer",
    moduleId: module.id,
    templateUrl: "./timer.html",
})
export class TimerComponent implements OnInit {
    timer: Timer;
    showWorkTimer: Boolean = true;
    showRestTimer: Boolean = false;
    public workTime = 10;
    public restTime = 20;
    public timerLabel: String = "WORK";

    constructor(
        private page: Page,
        private timerService: TimerService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.timer = this.timerService.getTimer();
        this.workTime = this.timer.work;
        this.restTime = this.timer.rest;
        this.page.actionBarHidden = true;
        this.startWorkTimer();
    }

    startWorkTimer() {
        this.timerLabel = "WORK";
        this.showRestTimer = false;
        this.showWorkTimer = true;
        this.workTime = this.timer.work;
        let workCountDown = setInterval(() => {
            console.log("WORK TIME: " + this.workTime);
            if( this.workTime != 0 ) {
                this.workTime--;
            }
            if( this.workTime == 0 ) {
                clearInterval(workCountDown);
                this.startRestTimer();
            }
        }, 1000);
    }

    startRestTimer() {
        this.timerLabel = "REST";
        this.showRestTimer = true;
        this.showWorkTimer = false;
        this.restTime = this.timer.rest;
        let restCountDown = setInterval(() => {
            console.log("REST TIME: " + this.restTime);
            if( this.restTime != 0 ) {
                this.restTime--;
            }
            if( this.restTime == 0 ) {
                clearInterval(restCountDown);
                this.startWorkTimer();
            }
        }, 1000);
    }
}
