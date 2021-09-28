#!/usr/bin/env node

import * as path from 'path'
import * as fs from 'fs'
import { ENV_FILE_NAME, ENV_WINDOW_PROPERTY } from './common'

const command = process.argv[2]

function initCommand() {
    const publicPath = process.argv[3] || "build"
    const envPrefix = process.argv[4] || "POSTENV_"

    const allEnvKeys = Object.keys(process.env)
    const publicEnvKeys = allEnvKeys.filter(key => key.startsWith(envPrefix))

    const publicEnv = {}
    for(let envKey of publicEnvKeys) {
        publicEnv[envKey] = process.env[envKey]
    }

    const filePath = path.join(publicPath, ENV_FILE_NAME)
    const fileContent = `// eslint-disable-next-line prettier/prettier
window["${ENV_WINDOW_PROPERTY}"]=${JSON.stringify(publicEnv)}`
    fs.writeFileSync(filePath, fileContent, { encoding: "utf8"})
}

function helpCommand() {
    console.log("USAGE: postenv init [publicPath] [envPrefix]")
}

switch (command) {
    case "init":
        initCommand();
        break;
    default:
        helpCommand();
}
