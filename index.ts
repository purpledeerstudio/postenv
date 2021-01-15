import { ENV_FILE_NAME } from './common'

export function getenv(variableName:string) {
    const publicEnv = require(`/${ENV_FILE_NAME}`)
    return publicEnv[variableName]
}




