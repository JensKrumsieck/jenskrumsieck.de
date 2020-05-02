export const state = () => ({
    publications: [],
    posters: [],
});

export const mutations = {
    setPublications(state, list) {
        state.publications = list;
    },
    setPosters(state, list){
        state.posters = list;
    }
};

export const actions = {
    async nuxtServerInit({ commit }) {
        let files = await require.context('./content/publications/', false, /\.json$/);
        let publications = files.keys().map(key => {
            let res = files(key);
            return res;
        });
        await commit('setPublications', publications);
        
        files = await require.context('./content/posters/', false, /\.json$/);
        let posters = files.keys().map(key => {
            let res = files(key);
            return res;
        });
        //reverse so the lastest is first
        posters = posters.reverse();
        await commit('setPosters', posters);
    },
};