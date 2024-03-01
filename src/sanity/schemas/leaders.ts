import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'leaders',
    type: 'document',
    title: 'Leaders',
    fields: [
        defineField({
            name: 'role',
            type: 'string',
            title: 'Leadership role',
        }),
        defineField({
            name: 'members',
            type: 'array',
            title: 'Members',
            of: [{type: 'reference', to: {type: 'author'}}]
        }),
        defineField({
            name: 'order',
            type: 'number',
            title: 'Order',
            validation: rule => rule.integer()
        }),
        defineField({
            name: 'aboutDisplay',
            title: 'Display on about page? (If true, include image)',
            type: 'boolean'
        }),
        defineField({
            name: 'photo',
            title: 'About page photo',
            type: 'image',
        }),
    ],

    preview: {
        select: {
            role: 'role',
        },
        prepare(selection) {
            const {role} = selection
            return {
                title: `${role} Members`
            }
        }
    }
})