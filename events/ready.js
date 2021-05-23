let Discord = require('discord.js');

module.exports = client => {
  console.log('Tersambung.');
  client.user.setStatus('idle');

  /* Status */
  function randomStatus() {
    let userTotal = client.guilds.cache.get("831479923180830742").memberCount;
    let status = [
      "Nap Cafe",
      "type k!help",
      "Wafiq Hoshimpnova (o゜▽゜)o☆",
      `Members : ${userTotal}`
    ];
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], { type: 'PLAYING' });

  }; setInterval(randomStatus, 15000);

  /** Mute Duration */
  const muteDuration = () => require('../plugin/durationMute.js')(client);
  setInterval(muteDuration, 30000);

  /* Music Events */
  require('../plugin/PlayerEvent.js')(client);

  /* Reset Collection Attachment */
  setInterval(() => client.dataAttachment = new Discord.Collection(), 300000);



}

