function formatDuration (seconds) {
    let years = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let sec = seconds;
    if(sec === 0){
      return 'now';
    }
    if(sec >= 3153600){
        years += Math.floor(sec/31536000);
        sec -= (years*31536000);
    }
    if(sec >= 86400){
        days += Math.floor(sec/86400);
        sec -= (days*86400);
    }
    if(sec >= 3600){
        hours += Math.floor(sec/3600);
        sec -= (hours*3600);
    }
    if(sec >= 60){
        minutes += Math.floor(sec/60);
        sec -= (minutes*60);
    }
    let parts = [];
    if(years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
    if(days > 0) parts.push(`${days} day${days > 1 ? 's' : ''}`);
    if(hours > 0) parts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    if(minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
    if(sec > 0 || parts.length === 0) parts.push(`${sec} second${sec !== 1 ? 's' : ''}`);
​
    if(parts.length === 1) {
        return parts[0];
    } else {
        return parts.slice(0, -1).join(', ') + ' and ' + parts.slice(-1);
    }
}
​