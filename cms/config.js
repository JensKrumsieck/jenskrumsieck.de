export default {
  display_url: 'https://jenskrumsieck.de',
  load_config_file: false,
  publish_mode: 'editorial_workflow',
  backend: {
    name: 'github',
    repo: 'jenskrumsieck/jenskrumsieck.de',
    branch: 'master'
  },

  i18n: {
    structure: 'multiple_folders',
    locales: ['de', 'en'],
    default_locale: 'en'
  },

  media_folder: 'public/img/uploads',
  public_folder: 'img/uploads',

  collections: [{
    name: 'publications',
    label: 'Publications',
    label_singular: 'Publication',
    folder: 'content/publications',
    create: true,
    fields: [
      { name: 'title', label: 'Title', widget: 'string' },
      { name: 'authors', label: 'Authors', widget: 'list', collapsed: true, summary: '{{fields.name}}', field: { name: 'name', label: 'Name', widget: 'string' } },
      {
        name: "journal", label: "Journal", widget: "object", summary: '{{fields.journalAbbr}}, {{fields.issue}}, {{fields.page}}.', fields: [
          { name: 'journalAbbr', label: 'Journal Abbreviation', widget: 'string' },
          { name: 'issue', label: 'Issue', widget: 'number', value_type: 'int' },
          { name: 'page', label: 'Page', widget: 'number', value_type: 'int' },
        ]
      },
      { name: 'date', label: 'Publish Date', widget: 'date' },
      { name: 'doi', label: 'DOI', widget: 'string' },
      { name: 'image', label: 'Image', widget: 'image', required: false },
      { name: 'imageCopyright', label: 'Image Copyright', widget: 'string', required: false },
      { name: 'body', label: 'Abstract', widget: 'markdown' }
    ]
  }
  ]
}