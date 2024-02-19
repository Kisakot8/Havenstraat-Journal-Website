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
        })
    ]
})
