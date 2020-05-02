export default async function scrollBehavior(to, from, savedPosition) {
   
    if(to.param['temp'] && to.param['temp'] == "noreload") return
    
    if (savedPosition) {
        return savedPosition
    }

    const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
            new Promise((resolve, reject) => {
                if (x > 50) {
                    return resolve()
                }
                setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
            })
    }

    if (to.hash) {
        return
        //hashing are handled otherwise
    }

    return { x: 0, y: 0 }
}