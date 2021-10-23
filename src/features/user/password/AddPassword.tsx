import { mode } from 'constants/index'
import React from 'react'
import ChangePasswordForm from './Form'

const ChangePassword: React.FC = () => {
  const handleSubmitForm = (data: any) => {
    console.log('data....', data)
  }

  console.log('run....')

  return (
    <div className="verify-page h-full w-full absolute inset-0 flex justify-center items-center bg-gray-100">
      <ChangePasswordForm
        handleSubmitForm={handleSubmitForm}
        title="Thêm mật khẩu"
        mode={mode.CREATE}
      />
    </div>
  )
}

export default ChangePassword
