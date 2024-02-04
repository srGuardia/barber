'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { useToggleTheme } from '@/reducers'
import { ThemeToggle } from '@/reducers/theme'

import { MenuIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useMemo } from 'react'

export const HeaderButton = () => {
  const [theme, themeDispatch] = useToggleTheme()

  const isChecked = useMemo(
    () => theme?.value === ThemeToggle.DARK,
    [theme?.value],
  )

  const handleChangeTheme = (active: boolean) => {
    if (!active) {
      themeDispatch({ type: 'CHANGE_LIGHT_THEME', payload: ThemeToggle.LIGHT })
      return
    }

    themeDispatch({ type: 'CHANGE_DARK_THEME', payload: ThemeToggle.DARK })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='h-8 w-8'>
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Tema</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='flex flex-row items-center gap-4'>
          <MoonIcon />
          <Switch
            className='checked:bg-red-500'
            checked={isChecked}
            onCheckedChange={(value) => handleChangeTheme(value)}
          />
          <SunIcon />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
