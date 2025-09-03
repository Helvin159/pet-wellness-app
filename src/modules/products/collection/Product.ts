import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload';

const Product: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({})
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Training & Cleanup', value: 'training-cleanup' },
        { label: 'Waste Management', value: 'waste-management' },
        { label: 'Health & Wellness', value: 'health-wellness' },
        { label: 'Feeding Essentials', value: 'feeding-essentials' },
        { label: 'Safety & Comfort', value: 'safety-comfort' }
      ],
      required: true
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true
        },
        {
          name: 'alt',
          type: 'text',
          required: true
        }
      ]
    },
    {
      name: 'inventory',
      type: 'number',
      required: true,
      min: 0
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Draft', value: 'draft' },
        { label: 'Out of Stock', value: 'out-of-stock' }
      ],
      defaultValue: 'active'
    }
  ]
};

export default Product;
