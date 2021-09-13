import type { GetStaticProps } from 'next'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    color: Model,
  },

  seeds(server) {
    server.db.loadData({
      colors: [
        {
          id: 1,
          colors: [
            '#ff0000',
            '#d80404',
            '#b40000',
            '#8d0404',
            '#6d0101',
            '#530000',
            '#240000',
          ],
          name: 'Vermelhos',
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/colors', () => {
      return this.schema.all('color')
    })
    this.post('/colors', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('color', data)
    })
  },
})

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaDescription: 'Crie grupos com as suas cores favoritas',
      pageTitle: 'Palette Colors',
      revalidate: 60 * 60 * 24, // 1 day
    },
  }
}
export { default } from 'containers/Home'
