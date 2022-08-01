import { shallowMount } from '@vue/test-utils';
import ShowItem from '@/components/ShowItem.vue';

const mockData = {
  show: {
    name: 'Example',
    rating: {
      average: '10',
    },
    premiered: '2020-01-01',
    genres: ['Horror', 'Reality'],
    language: 'English',
    image: {
      medium: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg',
    },
  },
};

describe('ShowItem.vue', () => {
  it('renders input and button', () => {
    const wrapper = shallowMount(ShowItem, {
      propsData: {
        show: mockData,
      },
    });

    expect(wrapper.findAll('div').at(0).text()).toBe('Name: Example');
    expect(wrapper.findAll('div').at(1).text()).toBe('Rating: 10');
    expect(wrapper.findAll('div').at(2).text()).toBe('Premiered: 2020-01-01');
    expect(wrapper.findAll('div').at(3).text()).toBe('Genres: Horror, Reality');
    expect(wrapper.findAll('div').at(4).text()).toBe('Language: English');
    expect(wrapper.find('.show-item-image').attributes().src).toBe('https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg');
  });

  it('renders default image if image prop null', () => {
    mockData.show.image = null;

    const wrapper = shallowMount(ShowItem, {
      propsData: {
        show: mockData,
      },
    });

    expect(wrapper.find('.show-item-image').exists()).toBe(true);
  });
});
