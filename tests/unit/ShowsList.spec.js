import { mount } from '@vue/test-utils';
import ShowsList from '@/components/ShowsList.vue';

const mockData = {
  show: {
    name: '',
    rating: {
      average: '',
    },
    premiered: '',
    genres: [],
    image: null,
  },
};

describe('ShowsList.vue', () => {
  it('renders text when no shows presented', () => {
    const wrapper = mount(ShowsList, {
      propsData: {
        shows: [],
      },
      shallow: true,
    });

    expect(wrapper.find('div').text()).toEqual('No shows');
  });

  it('renders shows when presented', () => {
    const wrapper = mount(ShowsList, {
      propsData: {
        shows: [mockData],
      },
      shallow: true,
    });

    expect(wrapper.find('li').attributes('class')).toBe('show-item');
  });
});
