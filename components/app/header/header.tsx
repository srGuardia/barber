import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { HeaderButton } from './header-button'

export const Header = () => {
  return (
    <Card className='rounded-none'>
      <CardContent className='flex flex-row items-center justify-between p-5'>
        <Image src='/logo.svg' alt='logo' width={120} height={22} />
        <HeaderButton />
      </CardContent>
    </Card>
  )
}
