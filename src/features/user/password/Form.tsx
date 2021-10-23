import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input } from 'antd'
import Form from 'antd/lib/form/Form'
import FormItem from 'components/Form/FormItem'
import yupExtension from 'extensions/yup'
import { ChangePassword } from 'Models'
import React from 'react'
import { ControllerRenderProps, FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { mode as modeForm } from 'constants/index'

type ChangePasswordFormProps = {
  handleSubmitForm(args: ChangePassword): void
  title?: string
  mode?: string
}

const schema = yup.object().shape({
  password: yupExtension.passwordRequired,
  confirmNewPassword: yupExtension.passwordRequired,
  confirmPassword: yupExtension.passwordRequired,
  oldPassword: yupExtension.passwordRequired,
  newPassword: yupExtension.passwordRequired
})

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = (
  props: ChangePasswordFormProps
) => {
  const { handleSubmitForm, title, mode } = props

  const isUpdate = mode === modeForm.UPDATE

  const formProps = useForm<ChangePassword>({
    defaultValues: {
      password: '',
      confirmNewPassword: '',
      confirmPassword: '',
      oldPassword: '',
      newPassword: ''
    },
    resolver: yupResolver(schema)
  })

  const { handleSubmit } = formProps

  const onSubmit = (data: ChangePassword) => {
    handleSubmitForm(data)
  }

  return (
    <div className="w-96 border-gray-400 border-2 rounded-md p-4 bg-white">
      <h2 className="text-center mb-4 text-2xl font-bold">{title}</h2>
      <FormProvider {...formProps}>
        <Form onFinish={handleSubmit(onSubmit)}>
          {/* Password */}
          <FormItem
            required={true}
            fieldName="password"
            isValidate={true}
            hideLabel={true}
          >
            {({ onChange, onBlur, value }: ControllerRenderProps) => (
              <Input.Password
                className="ant-input-affix-wrapper-lg custom__input"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={'Mật khẩu'}
              />
            )}
          </FormItem>
          {/* End password */}

          {/* confirmPassword */}
          <FormItem
            required={true}
            fieldName="confirmPassword"
            isValidate={true}
            hideLabel={true}
          >
            {({ onChange, onBlur, value }: ControllerRenderProps) => (
              <Input.Password
                className="ant-input-affix-wrapper-lg custom__input"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={'Nhập lại mật khẩu'}
              />
            )}
          </FormItem>
          {/* End confirmPassword */}

          {isUpdate && <div>Change Password</div>}

          <Button
            type="primary"
            htmlType="submit"
            className="w-full uppercase font-bold text-xl xl:text-2xl bg-black custom__input py-2 px-8"
            size="large"
          >
            {isUpdate ? 'Đổi mật khẩu' : 'Tạo mật khẩu'}
          </Button>
        </Form>
      </FormProvider>
    </div>
  )
}

export default ChangePasswordForm
