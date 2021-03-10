export default {
    cms_manual_init: true,
    publish_mode: 'editorial_workflow',
    backend: {
        name: 'github',
        repo: 'jenskrumsieck/jenskrumsieck.de',
        branch: 'master'
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
        {
            name: 'publication',
            label: 'Publication',
            folder: "publications",
            create: true,
            fields: [
                { label: 'title', name: 'Title', widget: 'string' }
            ]
        }
    ]
}