<template>
  <CollapseContainer title="基本设置" :canExpan="false">
    <a-row :gutter="24">
      <a-col :span="14">
        <BasicForm @register="register" />
      </a-col>
      <a-col :span="10">
        <div class="change-avatar">
          <div class="mb-2">头像</div>
          <CropperAvatar
            :uploadApi="uploadApi"
            :value="avatar"
            btnText="更换头像"
            :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
            @change="updateAvatar"
            width="100px"
          />
        </div>
      </a-col>
    </a-row>
    <Button type="primary" @click="handleSubmit"> 更新基本信息 </Button>
  </CollapseContainer>
</template>
<script lang="ts">
  import { Button, Row, Col } from 'ant-design-vue';
  import { computed, defineComponent, onMounted } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container';
  import { CropperAvatar } from '/@/components/Cropper';

  import { useMessage } from '/@/hooks/web/useMessage';

  import headerImg from '/@/assets/images/header.jpg';
  import { accountInfoApi } from '/@/api/demo/account';
  import { accountSetschemas } from './data';
  import { useUserStore } from '/@/store/modules/user';
  import { uploadApi } from '/@/api/sys/upload';

  export default defineComponent({
    components: {
      BasicForm,
      CollapseContainer,
      Button,
      ARow: Row,
      ACol: Col,
      CropperAvatar,
    },
    setup() {
      const { createMessage } = useMessage();
      const userStore = useUserStore();

      const [register, { getFieldsValue,setFieldsValue,validate }] = useForm({
        labelWidth: 100,
        schemas: accountSetschemas,
        showActionButtonGroup: false,
      });

      // onMounted(async () => {
      //   setFieldsValue({ email: '2010582488@qq.com' });
      //   const data = await accountInfoApi();
      //   setFieldsValue(data);
      //
      // });
      onMounted( () => {
        setFieldsValue({ email: '2010582488@qq.com' });
      });

      const avatar = computed(() => {
        const { avatar } = userStore.getUserInfo;
        console.log(avatar);
        return avatar || headerImg;
      });

      function updateAvatar({ src, data }) {
        const userinfo = userStore.getUserInfo;
        console.log(src);
        userinfo.avatar = src;
        userStore.setUserInfo(userinfo);
        console.log('data', data);
      }
      async function validate_form(){
        const data = await validate();
        window.console.log(getFieldsValue());
      }

      return {
        avatar,
        register,
        uploadApi: uploadApi as any,
        updateAvatar,
        handleSubmit: () => {
          validate_form();
          createMessage.success('更新成功！');
        },
      };
    },
  });
</script>

<style lang="less" scoped>
.change-avatar {
  img {
    display: block;
    margin-bottom: 15px;
    border-radius: 50%;
  }
}


@media only screen and (max-width: 767px) {
  /deep/ .ant-form-item{
    //background: #ff8000;

    margin-bottom: 3px !important;
  }
  /deep/ .ant-form-item-label{
    padding-bottom: 0 !important;
  }
  /deep/ .ant-form-item{
    margin-bottom: 5px;
  }
}
</style>
