import {Injectable} from "@angular/core";

import {Timer} from "./timer";

@Injectable()
export class TimerService {
    private timer = new Timer();

    getMinsSecs(type: string) {
        console.dump(this.timer);
        let minutes = Math.floor(this.timer[type] / 60);
        let seconds = ("0" + (this.timer[type] - minutes * 60)).slice(-2).toString();
        console.log(minutes);
        console.log(seconds);
        return { mins: minutes, secs: seconds };
    }

    setTimer(workTime: number, restTime: number) {
        this.timer.work = workTime;
        this.timer.rest = restTime;
    }

    getTimer(): Timer {
        return this.timer;
    }
}