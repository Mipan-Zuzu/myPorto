import type { Component, Ref } from "vue";

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
    badge: string
}

export interface EventScrol {
    about: Ref<HTMLElement | null>
    projects: Ref<HTMLElement | null>
    techstack: Ref<HTMLElement | null>
    contact: Ref<HTMLElement | null>
}

export interface DeskLayout {
    id: number
    title: string 
    status: string 
    desk: string
}

export interface RoadmapCards  {
    id: number
    status: string
    title: string
}