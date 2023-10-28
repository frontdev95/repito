import { $, $$, createPathNamesObject, formDataToObject } from "./utils.js";

const header = $('header')

const nav = $('[data-nav]')

const { pathname } = globalThis.location

const dataLinks = $$('[data-link]', nav).reduce((acm, element)=>({
    ...acm,
    ...createPathNamesObject(element.getAttribute('data-link'))
  }), {})



$$(`[data-link="${dataLinks[pathname]}"`, nav)
  ?.forEach(element => element.classList.add('nav-links__item--current-item'))



const contrastClassName = 'nav--contrast'

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry =>{
    if(entry.isIntersecting)
      return nav.classList.remove(contrastClassName)
    
    return nav.classList.add(contrastClassName)
  })
},{
  rootMargin: '-10%'
})

observer.observe(header)


$('[data-form="book"]')
  ?.addEventListener('submit', function(event){
    event.preventDefault()
    const data = formDataToObject(new FormData(this));

    console.log(data)
  })
