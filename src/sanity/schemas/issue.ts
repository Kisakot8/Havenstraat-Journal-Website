import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'issue',
    title: 'Issue',
    type: 'document',
    fields: [
        defineField({
            name: 'number',
            type: 'number',
            title: 'Number'
        }),
        defineField({
            name: 'articles',
            type: 'array',
            title: 'Articles',
            of: [{type: 'reference', to: {type: 'article'}}]
        }),
        defineField({
            name: 'issueColor',
            type: 'color',
            title: 'Issue theme color'
        }),
        defineField({
            name: 'publishDate',
            title: 'Publication Date',
            type: 'date',
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
        }),
        defineField({
            name: 'issuePDF',
            title: 'PDF',
            type: 'file',
        }),
          
    ],

    preview: {
        select: {
          num: 'number',
        },
        prepare(selection) {
            const {num} = selection
            return {
                title: `Issue #${num}`
            }
        }
      },
})
