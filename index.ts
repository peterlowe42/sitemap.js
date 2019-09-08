/*!
 * Sitemap
 * Copyright(c) 2011 Eugene Kalinin
 * MIT Licensed
 */
import { createSitemap } from './lib/sitemap'
export * from './lib/sitemap'
export * from './lib/sitemap-item'
export * from './lib/sitemap-index'
export * from './lib/sitemap-stream'
export * from './lib/errors'
export * from './lib/types'
export { lineSeparatedURLsToSitemap, mergeStreams } from './lib/utils'
export { xmlLint } from './lib/xmllint'
export { parseSitemap } from './lib/sitemap-parser'

export default createSitemap
