import type { Component } from "vue";

export interface CardAbout {
    Title: string
    Desk: string
}

export interface CardStats {
    id?: number 
    rank: string
    title: string,
    ico: Component
}

export interface CardProject {
    status: string
    date: string
    condition: boolean
    img: string
    titles : string
    desk: string
    category: string[]
    url: string
}