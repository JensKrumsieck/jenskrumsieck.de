import { CmsConfig } from "netlify-cms-core"

const config: CmsConfig = {
  display_url: 'https://jenskrumsieck.de',
  load_config_file: false,
  backend: {
    name: 'github',
    repo: 'jenskrumsieck/jenskrumsieck.de',
    branch: 'master',
    base_url: 'https://jenskrumsieck-de.vercel.app/',
    squash_merges: true
  },

  i18n: {
    structure: 'multiple_folders',
    locales: ['de', 'en'],
    default_locale: 'en'
  },

  media_folder: 'public/img/uploads',
  public_folder: 'img/uploads',

  collections: [
    {
      name: 'publications',
      label: 'Publications',
      label_singular: 'Publication',
      folder: 'content/publications',
      create: true,
      fields: [
        { name: 'title', label: 'Title', widget: 'string' },
        { name: 'authors', label: 'Authors', widget: 'list', collapsed: true, summary: '{{fields.name}}', field: { name: 'name', label: 'Name', widget: 'string' } },
        { name: 'annotation', label: 'Annotation', widget: 'string', required: false },
        {
          name: "journal", label: "Journal", widget: "object", summary: '{{fields.journalAbbr}}, {{fields.issue}}, {{fields.page}}.', fields: [
            { name: 'journalAbbr', label: 'Journal Abbreviation', widget: 'string' },
            { name: 'issue', label: 'Issue', widget: 'number', value_type: 'int' },
            { name: 'page', label: 'Page', widget: 'number', value_type: 'int', required: false },
          ]
        },
        { name: 'date', label: 'Publish Date', widget: 'datetime', format: 'YYYY-MM-DD', date_format: 'YYYY-MM-DD', time_format: false },
        { name: 'doi', label: 'DOI', widget: 'string', required: false },
        { name: 'image', label: 'Image', widget: 'image', required: false },
        { name: 'imageCopyright', label: 'Image Copyright', widget: 'string', required: false },
        { name: 'body', label: 'Abstract', widget: 'markdown' }
      ]
    },
    {
      name: 'posters',
      label: 'Posters',
      label_singular: 'Poster',
      folder: 'content/posters',
      create: true,
      fields: [
        { name: 'title', label: 'Title', widget: 'string' },
        { name: 'authors', label: 'Authors', widget: 'list', collapsed: true, summary: '{{fields.name}}', field: { name: 'name', label: 'Name', widget: 'string' } },
        { name: 'image', label: 'Image', widget: 'image' },
        { name: 'type', label: 'Type', widget: 'select', options: ['poster', 'oral', 'misc'] },
        {
          name: 'conferences', label: 'Conferences', widget: 'list', required: false, summary: '{{fields.title}}', fields: [
            { name: 'title', label: 'Title', widget: 'string' },
            { name: 'startDate', label: 'startDate', widget: 'datetime', format: 'YYYY-MM-DD', date_format: 'YYYY-MM-DD', time_format: false },
            { name: 'endDate', label: 'endDate', widget: 'datetime', format: 'YYYY-MM-DD', date_format: 'YYYY-MM-DD', time_format: false, required: false },
            { name: 'location', label: 'Location', widget: 'string', required: false },
            { name: 'url', label: 'URL', widget: 'string', required: false }
          ]
        }
      ]
    },
    {
      name: 'projects',
      label: 'Projects',
      label_singular: 'Project',
      folder: 'content/projects',
      create: true,
      i18n: true,
      fields: [
        { name: 'title', label: 'Title', widget: 'string', i18n: true },
        { name: 'image', label: 'Image', widget: 'image', required: false, i18n: 'duplicate' },
        { name: 'body', label: 'Abstract', widget: 'markdown', i18n: true }
      ]
    },
  ]
}

export default config