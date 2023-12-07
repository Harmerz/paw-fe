import { Flex, Form, Input, Typography } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export function LoginForm() {
  const router = useRouter()
  const [wrong, setWrong] = useState(false)
  const onFinish = async (e) => {
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: e.email,
        password: e.password,
      })
      if (!res?.error) {
        router.refresh()
      }
      if (res.status === 401 || res.status === 404) {
        setWrong(true)
        setTimeout(() => {
          setWrong(false)
        }, 3000)
      }
    } catch (err) {
      throw Error.message(err)
    }
  }

  const onFinishFailed = (errorInfo) => {
    throw Error.message('Failed:', errorInfo)
  }
  const [form] = Form.useForm()
  return (
    <Flex vertical justify="center">
      <Typography.Title className=" font-dmsans">Welcome back!</Typography.Title>
      <Typography.Text className="font-inter mb-10" type="secondary">
        Please login to access Tumbas
      </Typography.Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        requiredMark={false}
      >
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
        <div className="text-center text-red-500">{wrong && 'Wrong Username or Password!'}</div>
        <button
          className="flex w-full justify-center rounded-lg bg-ijo1 py-3 text-center text-white"
          type="submit"
        >
          Log In
        </button>
      </Form>

      <div className="mt-2 flex w-full flex-row justify-center gap-1">
        <div className="font-inter text-center">Don’t have an Account? </div>
        <Link href="/auth/signup">
          <div className="font-inter text-ijo3"> Sign Up</div>
        </Link>
      </div>
    </Flex>
  )
}

export default LoginForm
