const prefix = "r!"
const dcord = require('discord.js');
const bot = new dcord.Client();
const rbx = require('roblox-js')

bot.on("ready" => {
  console.log("Rankerup v1.0 Loaded!")
  bot.user.setGame("r!help | Rankerup v1.0")
})

bot.on("message", message => {
  if message.content == prefix + "rankup" {
  let member = message.mentions.members.first();
  let role = message.mentions.roles.first();
    member.addRole(role).catch(message.channel.send("Failed to give " + member.DisplayName + " the " + role.Name + "role! :frown:"))
    message.channel.send("Successfully gave " + member.DisplayName + " the " + role.Name + "role! :grin:").then(m => m.delete(2500))
}})

bot.login(process.env.tok)
