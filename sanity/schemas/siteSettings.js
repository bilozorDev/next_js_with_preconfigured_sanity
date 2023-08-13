/* eslint-disable import/no-anonymous-default-export */
import {CogIcon} from '@sanity/icons'
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  icon: CogIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text'
    }
  ]
}