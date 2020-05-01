export const state = () => ({
    publications: [],
});

export const mutations = {
    setPublications(state, list) {
        state.publications = list;
    },
};

export const actions = {
    async nuxtServerInit({ commit }) {
        let files = await require.context('~/assets/content/publications/', false, /\.json$/);
        let publications = files.keys().map(key => {
            let res = files(key);
            return res;
        });
        await commit('setPublications', publications);
    },
};