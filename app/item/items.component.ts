import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

import { Timer } from "./timer";
import { ItemService } from "./item.service"

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./items.css"]
})

export class ItemsComponent implements OnInit {
    timer: Timer;
    workTime: number = 120;
    restTime: number = 60;
    workMinutes: number = 2;
    workSeconds: string = "00";
    restMinutes: number = 1;
    restSeconds: string = "00";
    // timer: Timer = {work: this.workTime, rest: this.restTime};

    constructor(private page: Page, private timerService: ItemService) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.calcWorkTime();
        this.calcRestTime();
        // console.dump(this.timer);
    }

    calcWorkTime() {
        this.workMinutes = Math.floor(this.workTime / 60);
        this.workSeconds = ("0" + (this.workTime - this.workMinutes * 60)).slice(-2).toString();
        this.timer = {work: this.workTime, rest: this.restTime};
        this.timerService.setTimer(this.timer);
        // console.dump(this.timer);
    }

    calcRestTime() {
        this.restMinutes = Math.floor(this.restTime / 60);
        this.restSeconds = ("0" + (this.restTime - this.restMinutes * 60)).slice(-2).toString();
        this.timer = {work: this.workTime, rest: this.restTime};
        this.timerService.setTimer(this.timer);
        // console.dump(this.timer);
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
