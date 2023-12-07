import { Flex, Form, Input, message, Typography } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'

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
      router.push('/auth/signin')
    }
    if (isError) {
      error(errored?.response?.data?.message || '')
    }
  }, [error, errored?.response?.data?.message, isError, isSuccess, router, success])
  useEffect(() => {
    handleDone()
  }, [isSuccess, isError, handleDone])

  const onFinish = async (values) => {
    try {
      SignUp(values)
    } catch (err) {
      console.log(errored)
    }
    if (isError) error(errored)
  }

  const onFinishFailed = (errorInfo) => {
    error(errorInfo)
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
            className="flex w-full justify-center rounded-lg bg-ijo1 py-3 text-center text-white"
            type="submit"
          >
            Sign Up
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
