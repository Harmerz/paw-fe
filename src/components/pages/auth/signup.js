import { Flex, Form, Input, message, Typography } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { LuLoader2 } from 'react-icons/lu'

import { useSignUp } from '@/hooks/user'

export function SignupForm() {
  const [messageApi, contextHolder] = message.useMessage()
  const { mutate: SignUp, isError, isSuccess, error: errored } = useSignUp()
  const router = useRouter()
  const success = useCallback(() => {
    messageApi.open({
      type: 'success',
      content: 'User was registered successfully!',
    })
  }, [messageApi])
  const [loading, setLoading] = useState(false)

  const error = useCallback(
    (err) => {
      messageApi.open({
        type: 'error',
        content: `${err}`,
      })
    },
    [messageApi],
  )

  const handleDone = useCallback(() => {
    if (isSuccess) {
      success()
      setLoading(false)
      router.push('/auth/signin')
    }
    if (isError) {
      error(errored?.response?.data?.message || '')
      setLoading(false)
    }
  }, [error, errored?.response?.data?.message, isError, isSuccess, router, success])
  useEffect(() => {
    handleDone()
  }, [isSuccess, isError, handleDone])

  const onFinish = async (values) => {
    try {
      setLoading(true)
      SignUp(values)
    } catch (err) {
      setLoading(false)
      error(err)
    }
    if (isError) error(errored)
  }

  const onFinishFailed = (errorInfo) => {
    error(errorInfo)
    setLoading(false)
  }
  return (
    <>
      {contextHolder}
      <Flex vertical justify="center">
        <Typography.Title className=" font-dmsans">Let’s Get You Started</Typography.Title>
        <Typography.Text className="font-inter mb-10" type="secondary">
          Please create an account to access Tumbas
        </Typography.Text>
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          requiredMark={false}
        >
          <Form.Item
            className="font-inter"
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please input your Full Name!', type: 'name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="font-inter"
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!', type: 'username' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="font-inter"
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="font-inter"
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <button
            className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 text-center text-white ${
              loading ? 'justify-between bg-ijo3' : 'justify-center bg-ijo1'
            }`}
            type="submit"
          >
            {loading && <div className="flex h-5 w-5 animate-spin text-white" />}
            <span>Sign Up</span>
            {loading && <LuLoader2 className="flex h-5 w-5 animate-spin text-white" />}
          </button>
        </Form>

        <div className="mt-2 flex w-full flex-row justify-center gap-1">
          <div className="font-inter text-center">Already have an Account? </div>
          <Link href="/auth/signin">
            <div className="font-inter text-ijo3"> Sign In</div>
          </Link>
        </div>
      </Flex>
    </>
  )
}

export default SignupForm
