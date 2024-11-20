import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import PostsView from '@/views/PostsView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'



describe('PostsView', () => { 
    test('Probando la existencia del componente o vista PostsView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/posts',
                name: 'PostsViewVue',
                component: PostsView
            }],
        })
        router.push('/posts')
        await router.isReady()

        const wrapper = mount(PostsView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(PostsView).exists()).toBe(true)
    })  
    test('Probando la existencia del componente o vista AboutView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'AboutView',
                component: AboutView
            }],
        })
        router.push('/posts')
        await router.isReady()

        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    }) 
    test('Probando la existencia del componente o vista ContacView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/contact',
                name: 'ContactView',
                component: ContactView
            }],
        })
        router.push('/posts')
        await router.isReady()

        const wrapper = mount(ContactView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(ContactView).exists()).toBe(true)
    })   
 })

 describe('HomeView', () => {
    test('Snapshot de la estructura HTML del componente HomeView', () => {
      const wrapper = mount(HomeView)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('AboutView', () => {
    test('Snapshot de la estructura HTML del componente AboutView', () => {
      const wrapper = mount(AboutView)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })