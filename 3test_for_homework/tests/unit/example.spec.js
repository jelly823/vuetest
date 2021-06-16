import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('slot', () => {
    const wrapper = shallowMount(Button, {
      propsData: {  },
      slots:{
        default:"test slots"
      }
    })
    expect(wrapper.text()).toContain("test slots");
  });

  it('disabled false then emit', async () => {
    const wrapper = shallowMount(Button,{
      propsData:{},
    });
    const btn = wrapper.get(".click");
    btn.trigger("click");
    //console.log(wrapper.emitted());
    expect(wrapper.emitted("click")[0]).toEqual([]);
  });

  it('disabled true then not emit', async () => {
    const wrapper = shallowMount(Button,{
      propsData:{
        disabled:true
      },
    });
    const btn = wrapper.get(".click");
    btn.trigger("click");
    //console.log(wrapper.emitted());
    // expect(wrapper.emitted("click")).toBe(undefined);
    expect(wrapper.emitted("click")).toBeFalsy();
  });
})
