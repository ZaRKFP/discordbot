module.exports = (client, member) => {
    if (member.guild.id === "831479923180830742") {
        client.channels.cache.get('831479923905396740').send(
            `Hai ${member.user}, Selamat Datang di Server ${member.guild.name}. Silahkan baca <#831685121354498087> dulu yaa. Baca juga <#831894554671054848> untuk mendapatkan role membership secara otomatis~`
        )
        member.roles.add('831692561202020372')
    }


}