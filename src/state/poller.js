/**
 * Poller calls the API for new data on an interval
 * @class
 */
export class Poller {
    /**
     * Creates a new instance of the Poller class
     * @constructor
     * @param {function} onPoll - fires at interval
     * @param {number} interval - interval in seconds
     */
    constructor(onPoll, interval = 15) {
        /**
         * @private
         * @type {number}
         */
        this._pid = null;

        /**
         * @private
         * @type {function}
         */
        this._onpoll = onPoll;

        /**
         * @private
         * @type {number}
         */
        this._interval = interval;
    }

    /** 
     * @readonly
     * @type {boolean} 
     */
    get isRunning() { return (this._pid !== null); }

    start() {
        if (this.isRunning === false) {
            this._pid = setInterval(() => {
                this._onpoll();
            }, (this._interval * 1000));
        }
    }

    stop() {
        if (this.isRunning === true) {
            clearInterval(this._pid);
            this._pid = null;
        }
    }
}