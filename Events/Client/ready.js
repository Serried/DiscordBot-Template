const { loadCommands } = require("../../Handlers/commandHandler")
module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("Club Bot is now ready!")

        loadCommands(client);
    }
}