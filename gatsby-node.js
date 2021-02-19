exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  switch (page.path) {
    case '/dynamic/thing/':
      createPage({
        ...page,
        matchPath: '/dynamic/thing/:id/'
      })
      break
    case '/dynamic/fallback/':
      createPage({
        ...page,
        matchPath: '/dynamic/*'
      })
      break
  }
}
