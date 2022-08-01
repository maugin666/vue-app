import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders title', () => {
    const wrapper = shallowMount(App);

    expect(wrapper.find('h1').text()).toBe('TV Shows');
  });
});
