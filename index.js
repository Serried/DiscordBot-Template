const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages], 
    partials: [User, Message, GuildMember, ThreadMember]
});

const { loadEvents } = require("./Handlers/eventHandler");


client.config = require("./config.json")
client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();

const { connect } = require("mongoose");
connect(client.config.DatabaseURL, {
}).then(() => console.log("The bot is now connected to the database!"));

loadEvents(client);

client
    .login(client.config.token)
.catch((err) => console.log(err));
