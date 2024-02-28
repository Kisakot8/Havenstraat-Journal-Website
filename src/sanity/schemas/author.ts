import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string'
    }),
    defineField({
      name: 'author',
      title: 'Is this person an author?',
      type: 'boolean'
    }),
  ],
  preview: {
    select: {
      name: 'name',
      isAuthor: 'author'
    },
    prepare(selection) {
      const {name, isAuthor} = selection
      return {
        title: `${name}: ${isAuthor ? 'author' : 'not author'}`
      }
    }
  },
})
