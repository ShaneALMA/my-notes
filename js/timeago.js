function timeSince(date) {
  if (typeof date !== 'object') {
    date = new Date(date);
  }

  var seconds = Math.floor((new Date() - date) / 1000);
  var intervalType;

  var interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = 'año';
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = 'mes';
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = 'día';
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = "hora";
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = "minuto";
          } else {
            interval = seconds;
            intervalType = "segundo";
          }
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    if (intervalType === "mes") {
      intervalType += "es"
    } else {
      intervalType += 's';
    }

  }

  if (intervalType === "segundos" && interval === 0) {
    return "hace un momento"
  }

  return 'hace ' + interval + ' ' + intervalType;
}