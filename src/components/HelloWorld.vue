<script setup lang="ts">
import { h, reactive, ref } from 'vue';
import { createMessage} from '@yichu0131/z-element'
import type { DropdownInstance, FormItemRule, MenuOption, SelectOption, TooltipInstance } from '@yichu0131/z-element'
import type{ Options } from "@popperjs/core"

defineProps<{
  msg: string
}>()

const collapseVal = ref([])
// tootip
const tooltipTrigger = ref('click')
const options: Partial<Options> = {
  placement: 'right',
  strategy: 'fixed'
}
const tooltipRef = ref<TooltipInstance>()
const open = () => {
  if(tooltipRef.value){
    console.log(tooltipRef.value)
    tooltipRef.value.show()
  }
}
const close = () => {
  if(tooltipRef.value){
    tooltipRef.value.hide()
  }
}

// dropdown
const DropdownOptions: MenuOption[] = [
  { key: '1', label: '选项1' },
  { key: '2', label: '选项2', disabled: true },
  { key: '3', label: '选项3', disabled: true },
  { key: '4', label: '选项4' },
]
const dropdownTrigger = ref('hover')
const DropdownRef = ref<DropdownInstance | null>(null)
const DropdownOpen = () => {
  if(DropdownRef.value){
    DropdownRef.value.show()
  }
}
const DropdownClose = () => {
  if(DropdownRef.value){
    DropdownRef.value.hide()
  }
}
// input
const inputVal = ref('你好呀')
setTimeout(() => {
  inputVal.value = '我是被修改的'
}, 3000)
// switch
const switchVal = ref('right')
// message
const errorMsg = () => createMessage({message:'这是第四个啦', type:"danger",showClose: true, duration: 0})

// select
const SelectOptions = reactive<SelectOption[]>([
  { label: '苹果', value: '1' },
  { label: '香蕉', value: '2' },
  { label: '西瓜', value: '3' },
  { label: '桃子', value: '4', disabled: true },
  { label: '苹果2', value: '5' },
  { label: '苹果3', value: '6' },
  { label: '苹果4', value: '7' },
])
const SelectVal = ref('')
const customRender = (option:SelectOption) => {
  return h('div', { className:'xyz'},[h('b',option.label),h('i',option.value)])
}
// select远程
const test = ref('')
const states = [
'Alabama',
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
'Delaware',
'Florida',
'Georgia',
'Hawaii',
'Idaho',
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
'Maine',
]
const remoteFilter = (query:string) => {
  return new Promise<SelectOption[]>((resolve) => {
    if(query){
      setTimeout(() => {
        const options: SelectOption[] = states.filter((state) => state.toLowerCase().includes(query.toLowerCase())).map(label => {
          return { label,value:label }
        })
        resolve(options)
      },500)
    } else {
      resolve([])
    }
  })
}
// 真实的场景
const handleFetch = (query:string) => {
  if(!query) return Promise.resolve([])
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
.then((res) => res.json())
.then(({ items }) =>{
  return items.slice(0,10).map((item: { name: string; node_id: string; }) => ({label: item.name , value: item.node_id}))
})
}

// Form
const formRef = ref()
// 此处是最初的值
const model = reactive({
  email: 'email',
  password: 'password',
  confirmPwd: '',
})
const rules = {
  email: [
    { type: 'email', required: true, message: '请输入邮箱', trigger: 'blur' },
    {type:'string', required: true, trigger: 'input' }
  ],
  password: [
    { type:'string',required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
  ],
  confirmPwd: [
    {type: 'string',required: true, message: '请输入密码', trigger: 'blur' },
    {validator: (rule: any,value: string) => value === model.password, message: '两次密码不一致', trigger: 'blur'  }
  ]
}

const submit = async () => {
  try {
    await formRef.value?.validate()
  } catch(e) {
    console.log('validate failed',e)
  }
}

const reset = () => {
  formRef.value?.resetFields()
}

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

    <div>
      <!-- button -->
      <vk-button>quanbu</vk-button>
      <vk-button circle size="large">圆</vk-button>
      <br>
      <br>
      <!-- collapse -->
      <VKCollapse v-model="collapseVal">
        <VKCollapseItem name="a" title="props中的标题一">
          <template #title>第一标题</template>
          <h1>第一章</h1>
          <p>这是段落11111111111111111</p>
        </VKCollapseItem>
        <VKCollapseItem name="b" title="props中的标题二">
          这是段落2222222222222222
        </VKCollapseItem>
      </VKCollapse>
      <br>
      <br>
      <br>
      <!-- message -->
      <vk-button @click="errorMsg">触发信息</vk-button>
      <br>
      <br>
      <!-- tooltip -->
       <br>
      <VkTooltip  content="hover" :popper-options="options" :trigger="tooltipTrigger">
          <img src="../assets/logo.svg" alt="" width="120" height="120">
      </VkTooltip>
      <br>
      <VkTooltip  content="manual" :popper-options="options" :trigger="tooltipTrigger" manual ref="tooltipRef">
          <img src="../assets/logo.svg" alt="" width="120" height="120">
      </VkTooltip>
      <br>
      <vk-button size="large" @click="open">开启</vk-button>
      <vk-button size="large" @click="close">关闭</vk-button>
      <!-- dropdown -->
      <br>
      <br>
      <br>
      <br>
      <vk-dropdown placement="top" :MenuOptions="DropdownOptions" :trigger="dropdownTrigger" ref="DropdownRef" manul>
        <img src="../assets/logo.svg" width="125" height="125">
      </vk-dropdown>
      <vk-button size="large" @click="DropdownOpen">开启</vk-button>
      <vk-button size="large" @click="DropdownClose">关闭</vk-button>
      <!-- icon -->
      <br>
      <br>
      <br>
      <br>
      <VKIcon icon="fa-solid fa-user-secret" size="3x" type="danger" />
      <!-- input -->
      <br>
      <br>
      <br>
      <br>
      <VkInput type="text" v-model="inputVal" :disabled="false" :showPassword="false" size="large">
        <template #prepend>
          <VKIcon icon="fa-solid fa-user-secret" />
        </template>
        <template #append>
          <VKIcon icon="fa-solid fa-user-secret" />
        </template>
        <template #prefix>
          <VKIcon icon="fa-solid fa-user-secret" />
        </template>
      </VkInput>
      <!-- switch -->
      <br>
      <br>
      <br>
      <br>
      <VkSwitch v-model="switchVal" activeValue="right" inactiveValue="wrong" active-text="on" inactive-text="off"/>
      <h4>model-value {{ switchVal }}</h4>
      <!-- select -->
      <br>
      <br>
      <br>
      <br>
      <VkSelect v-model="SelectVal" :options="SelectOptions" placeholder="请输入" :disabled="false" :clearable="true" :render-label="customRender" filterable/>
      <br>
      <br>
      <br>
      <br>
      <br>
      <VkSelect v-model="test" placeholder="搜索远程结果" filterable remote :remote-method="remoteFilter" :disabled="false"/>
      <br>
      <br>
      <br>
      <br>
      <br>
      <VkSelect v-model="test" placeholder="搜索真实远程" filterable remote :disabled="false" :remote-method="handleFetch" />
      <br>
      <br>
      <br>
      <br>
      <br>
      <VkForm :model="model" :rules="rules" ref="formRef">
        <VkFormItem label="邮箱" prop="email">
          <VkInput type="text" v-model="model.email"/>
        </VkFormItem>
        <VkFormItem label="密码" prop="password">
          <template #label="{label}">
            <vk-button>{{ label }}</vk-button>
          </template>
          <VkInput type="password" v-model="model.password"/>
        </VkFormItem>
        <VkFormItem label="确认密码" prop="confirmPwd">
          <VkInput type="password" v-model="model.confirmPwd"/>
        </VkFormItem>
        <div>
          <vk-button type="primary" @click.prevent="submit">Submit</vk-button>
          <vk-button @click.prevent="reset">Reset</vk-button>
        </div>
      </VkForm>
    
    </div>
   
    <div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
