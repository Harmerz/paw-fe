import { Flex, Form, Input, Space, Typography } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export function LoginForm() {
  const router = useRouter()
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
    } catch (err) {
      throw Error.message(err)
    }
  }
  // axios.get('/ping').then((res) => console.log(res))

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
        <button
          className="flex w-full justify-center rounded-lg bg-ijo1 py-3 text-center text-white"
          type="submit"
        >
          Log In
        </button>
      </Form>
      <Space direction="horizontal">
        <Typography.Text className="font-inter">Don’t have an Account?</Typography.Text>
        <Link href="/auth/signup">
          <Typography.Text className="font-inter text-bluey-500" strong>
            Sign Up
          </Typography.Text>
        </Link>
      </Space>
    </Flex>
  )
}

export default LoginForm
