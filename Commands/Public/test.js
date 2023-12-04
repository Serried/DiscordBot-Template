const { ChatInputCommandInteraction, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("A test command."),

    /**
     * 
     * @param { ChatInputCommandInteraction } interaction
     */

execute(interaction) {
    interaction.reply({content: "This is a test command.", ephemeral: true});
}
}