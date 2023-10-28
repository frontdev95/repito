/**
 * 
 * @param {string} selector 
 * @param {HTMLElement?} node 
 * @returns {HTMLElement?}
 */
export const $ = (selector, node= document.body)=> node.querySelector(selector)

/**
 * 
 * @param {string} selector 
 * @param {HTMLElement} node 
 * @returns {HTMLElement[]}
 */
export const $$ = (selector, node= document.body) => [...node.querySelectorAll(selector)]


/**
 * 
 * @param {string} pathName 
 */
export const resolvePathName = (pathName) => {
  const initialPathName = pathName === '/' ? '/' : `/${pathName}`

  return`${initialPathName}${initialPathName.endsWith('/') ? '': '/'}`
}

export const createPathNamesObject =  (dataLink, basePathName) => {
  const resolvedPathName =  resolvePathName(basePathName ?? dataLink)

  return {
    [resolvedPathName]: dataLink,
    [`${resolvedPathName}index.html`]: dataLink
  }
}

/**
 * 
 * @param {FormData} data 
 * @returns {Record<string, string>}
 */
export const formDataToObject = (data)=> [...data.entries()]
  .reduce((acm, [key, value])=>({...acm, [key]: value}), {})
