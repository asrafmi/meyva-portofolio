import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technoloogies',
      title: 'Technoloogies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'isCurrentlyWorkingHere',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})
