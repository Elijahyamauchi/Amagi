import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import AmagiClient from "../../../instances/classes/client/AmagiClient";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription('rolls a dice')
        .addIntegerOption(option => option.setName('range')
        .setDescription('changes the max roll limit 100')
        .setMinValue(2).setMaxValue(100).setRequired(true)),
    usage: "d6",
    return: "rolls a 6 sided dice.",
    async execute(interaction: ChatInputCommandInteraction, client: AmagiClient) {
        await interaction.deferReply();
        const newMax=interaction.options.getInteger('range')!;
        const newMsg = String(getRandomInt(newMax));

        await interaction.editReply({
            content: newMsg
        });
    },
};

/**
 * 
 * @param {number} max  
 * @returns {number}
 * a program that takes a int variable and generates a random int in the range of 0 to that number.
 */
function getRandomInt(max:number){
    return Math.floor(Math.random()*max);
}

/**
 * condider user entering range of 0 or a neg number
 * 
 */