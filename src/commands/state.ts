import { AudioPlayer } from '@discordjs/voice'

import { Queue } from '../data/Queue'

export var timeout: Array<NodeJS.Timeout | undefined> = new Array()
export var queue: Array<Queue<{title: string, url: string, duration: string}>> = new Array()
export var player: Array<AudioPlayer> = new Array()
export var nowPlaying: Array<{title: string, url: string, duration: string} | undefined> = new Array()