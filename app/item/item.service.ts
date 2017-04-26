import {Injectable} from "@angular/core";

import {Timer} from "./timer";

@Injectable()
export class ItemService {
    private timer = new Timer();

    setTimer(theTimer: Timer) {
        this.timer = theTimer;
    }

    getTimer(): Timer {
        return this.timer;
    }
}