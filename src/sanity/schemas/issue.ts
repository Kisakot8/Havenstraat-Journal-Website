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
            name: 'issues',
            type: 'array',
            title: 'Issues',
            of: [{type: 'reference', to: {type: 'article'}}]
        })
    ]
})
