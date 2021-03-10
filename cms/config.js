export default {
  backend: {
    name: 'github',
    repo: 'jenskrumsieck/jenskrumsieck.de',
    branch: 'master'
  },

  media_folder: 'public/img/uploads',
  public_folder: 'img/uploads',

  collections: [{
    name: 'publication',
    label: 'Publication',
    folder: 'content/publications',
    create: true,
    fields: [
      {
        name: 'title',
        label: 'Title',
        widget: 'string'
      },
    ]
  }
  ]
}