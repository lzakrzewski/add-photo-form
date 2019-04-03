import FormTextArea from '../../../src/components/FormTextArea.vue';
import { shallowMount } from '@vue/test-utils'

describe('FormTextArea', () => {
    test('it can display green tick', () => {
        const wrapper = shallowMount(
            FormTextArea,
            { propsData: { name: 'comments', placeholder: 'placeholder', isValid: true } }
        );

        expect(wrapper.find('.check-icon').exists()).toBe(true)
    })
})
