'use client'

import { Card } from 'antd'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function LayoutAuth({ children }) {
  const router = usePathname()
  return (
    <div
      className="flex h-[100vh] w-[100vw] flex-row justify-around"
      style={{
        backgroundImage: 'url("/assets/auth/bg_Auth.png")',
        backgroundSize: 'cover, contain',
      }}
    >
      <div className="flex w-2/3 items-center justify-center">
        <Image
          src={`/assets/page/auth/${router === '/auth/signin' ? 'signin' : 'signup'}.png`}
          alt="Auth Image"
          fill
          objectFit="cover"
        />
      </div>
      <div className="w-1/3">
        <Card className="absolute right-0 flex h-[100vh] w-1/3 items-center justify-center rounded-l-lg">
          {children}
        </Card>
      </div>
    </div>
  )
}

export default LayoutAuth
