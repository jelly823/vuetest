import { shallowMount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'

//组件的input
//1.props
//2.用户交互
//3.slots

//组件的output
//1.emit发出一个事件
//2.视图的变更
//3.调用全局函数

describe('TodoItem.vue', () => {
  it('renders item when passed', () => {
    // item -> given测试数据
    const item = {
      title:"todo1",
    };
    // when -> 触发测试动作
    const wrapper = shallowMount(TodoItem, {
      propsData: { item }
    });
    // then -> 验证结果
    console.log(wrapper.text());
    expect(wrapper.text()).toContain("todo1");
    //expect(wrapper.text()).toMatch(item)
  });
  //only仅测试当前it
  it('should emit delete event when click delete button', async () => {
    const item = {
      id:1,
    };
    const wrapper = shallowMount(TodoItem,{
      propsData: { item }
    });
    //找到这个按钮，先在按钮里添加一个类来找到他
    const btn = wrapper.get(".delete");
    //触发这个按钮（可触发多次，每次对应大数组里面的每个小数组）
    btn.trigger("click");
    btn.trigger("click");

    //wrapper中的emitted方法可以看到组件所有发出的事件
    console.log(wrapper.emitted());
    expect(wrapper.emitted("delete")[0]).toEqual([item]);
  });

  it.only('slots test', async () => {
    const item = {
      id:1,
    };
    const wrapper = shallowMount(TodoItem,{
      propsData: { item },
      slots:{
        default:"test slots"
      }
    });
    expect(wrapper.text()).toContain("test slots");
  });
})
