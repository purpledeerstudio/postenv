import { ENV_FILE_NAME, ENV_WINDOW_PROPERTY } from './common'


if (!window[ENV_WINDOW_PROPERTY])
    throw `Missing postenv script. Generate it with npx postenv init and then include <script src="/${ENV_FILE_NAME}"></script> before ReactDOM.render is executed.`

export const env = window[ENV_WINDOW_PROPERTY]




