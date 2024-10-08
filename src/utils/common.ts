import { open } from '@tauri-apps/api/shell'

export const pakeUrlMap = {
    github: 'https://github.com/Sjj1024/PakePlus',
    weixin: 'https://github.com/Sjj1024/PakePlus',
    qq: '',
    email: '',
    website: '',
    x: '',
    google: '',
    csdn: '',
    zhihu: '',
    juejin: '',
}

export const openUrl = async (url: string) => {
    await open(url)
}
