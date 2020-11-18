const DURATION_IN_SECONDS = {
    epochs: ["year", "month", "day", "hour", "minute"],
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
};

function getDuration(seconds) {
    var epoch, interval;

    for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i++) {
        epoch = DURATION_IN_SECONDS.epochs[i];
        interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
        if (interval >= 1) {
            return {
                interval: interval,
                epoch: epoch,
            };
        }
    }
}

export function format(rtf) {
    return function (dateString) {
        var seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
        var duration = getDuration(seconds);
        return rtf.format(duration.interval * -1, duration.epoch);
    }
}