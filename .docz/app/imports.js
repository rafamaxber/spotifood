export const imports = {
  'src/components/Home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-home" */ 'src/components/Home.mdx'),
  'src/components/Card/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-card-index" */ 'src/components/Card/index.mdx'),
  'src/components/Filters/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-filters-index" */ 'src/components/Filters/index.mdx'),
  'src/components/Header/Header.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-header-header" */ 'src/components/Header/Header.mdx'),
  'src/components/Layout/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-layout-index" */ 'src/components/Layout/index.mdx'),
  'src/components/Loading/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-loading-index" */ 'src/components/Loading/index.mdx'),
}
