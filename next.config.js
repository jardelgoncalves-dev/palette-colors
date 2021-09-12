/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const plugins = [[withImages]]

const nextConfiguration = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
}

module.exports = withPlugins([...plugins], nextConfiguration)
