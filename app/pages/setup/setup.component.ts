import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

import { Timer } from "../timer/timer";
import { TimerService } from "../timer/timer.service"

@Component({
    selector: "setup-timer",
    moduleId: module.id,
    templateUrl: "./setup.html"
})

export class SetupComponent implements OnInit {
    timer: Timer;
    workTime: number = 5;
    restTime: number = 3;
    workMinutes: number;
    workSeconds: string;
    restMinutes: number;
    restSeconds: string;

    constructor(private page: Page, private timerService: TimerService) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.timer = {work: this.workTime, rest: this.restTime};
        this.timerService.setTimer(this.workTime, this.restTime);
        
        this.calcWorkTime();
        this.calcRestTime();
    }

    calcWorkTime() {
        this.timerService.setTimer(this.workTime, this.restTime);
        let minsAndSecs = this.timerService.getMinsSecs('work');
        this.workMinutes = minsAndSecs.mins;
        this.workSeconds = minsAndSecs.secs;
    }

    calcRestTime() {
        this.timerService.setTimer(this.workTime, this.restTime);
        let minsAndSecs = this.timerService.getMinsSecs('rest');
        this.restMinutes = minsAndSecs.mins;
        this.restSeconds = minsAndSecs.secs;
    }

    changeWork(timeUnit: string, change: string) {
        if (timeUnit == "minute") {
            if (change == "plus")
                this.workTime += 60;
            if (change == "minus")
                this.workTime -= 60;
        } else {
            if (change == "plus")
                this.workTime += 5;
            if (change == "minus")
                this.workTime -= 5;
        }
        if (this.workTime <= 0)
            this.workTime = 0;
        this.calcWorkTime();
    }

    changeRest(timeUnit: string, change: string) {
        if (timeUnit == "minute") {
            if (change == "plus")
                this.restTime += 60;
            if (change == "minus")
                this.restTime -= 60;
        } else {
            if (change == "plus")
                this.restTime += 5;
            if (change == "minus")
                this.restTime -= 5;
        }
        if (this.restTime <= 0)
            this.restTime = 0;
        this.calcRestTime();
    }

}
