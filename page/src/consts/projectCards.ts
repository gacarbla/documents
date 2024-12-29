import Battery from "../icons/Battery.astro";
import Events from "../icons/Events.astro";
import Secure from "../icons/Secure.astro";
import Logs from "../icons/Logs.astro";
import Podcast from "../icons/Podcast.astro";
import Starts from "../icons/Starts.astro";

interface CardCommunity {
    Icon: any;
    label: string;
    content: string;
    color: string;
    url: string,
}

export const cardsProjects: CardCommunity[] = [
    {
        Icon: Logs,
        label: "Discord Dates",
        color: "cyan",
        url: "/projects/discord-dates",
        content:
            "Herramienta de gran utilidad para compartir fechas u horas en formato internacional.",
    },
    {
        Icon: Logs,
        label: "Text encryptor",
        color: "emerald",
        url: "/projects/text-encryptor",
        content:
            "Sistema de encriptación rápida y fácil de textos.",
    },
    {
        Icon: Secure,
        label: "Mod Embed Builder",
        color: "yellow",
        url: "/projects/mod-embed-builder",
        content:
            "Construye Embeds informativos de forma rápida y fácil.",
    },
    {
        Icon: Secure,
        label: "Miautilidades",
        color: "purple",
        url: "/projects/miautilidades",
        content:
            "Bot de Discord para utilidades y funciones de moderadores.",
    },
    {
        Icon: Starts,
        label: "Miauyudante",
        color: "orange",
        url: "/projects/miauyudante",
        content:
            "Bot de Discord para utilidades y funciones de comunidad.",
    },
    {
        Icon: Starts,
        label: "Catto Coffee",
        color: "teal",
        url: "/projects/catto-coffee",
        content:
            "Bot de Discord multipropósito público.",
    },
];
