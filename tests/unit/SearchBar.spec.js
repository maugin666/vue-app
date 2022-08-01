import { shallowMount } from '@vue/test-utils';
import SearchBar from '@/components/SearchBar.vue';

describe('SearchBar.vue', () => {
  let wrapper = null;

  beforeAll(() => {
    wrapper = shallowMount(SearchBar);
  });

  it('renders input and button', () => {
    expect(wrapper.find('input').attributes('placeholder')).toBe('Type to search');
    expect(wrapper.find('button').text()).toEqual('Search');
  });

  it('emits input value after clecking', async () => {
    const button = wrapper.find('button');
    const input = wrapper.find('input');
    const value = 'some value';

    await input.setValue(value);

    await button.trigger('click');

    wrapper.vm.$emit('search', value);

    expect(wrapper.emitted('search')).toBeTruthy();
    expect(wrapper.emitted('search')[0]).toEqual([value]);
  });
});
