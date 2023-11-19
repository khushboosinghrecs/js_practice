function DownloadVediod(vedio, a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            a ? resolve('Sharew the vedio', vedio) :
                reject('shared code is not in good block')
        }, 1100)
    })
}