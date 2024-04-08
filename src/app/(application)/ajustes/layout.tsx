import { ReactNode } from 'react'

import { headers } from 'next/headers'
import { userAgent } from 'next/server'
import ResponsiveMenu from '@/components/ResponsiveMenu'
import SettingsSidebar from './_components/SettingsSidebar'

function LayoutSettings({ children }: { children: ReactNode }) {
  const ua = userAgent({ headers: headers() })
  const viewport = ua.device.type === 'mobile' ? 'mobile' : 'desktop'

  if (viewport == 'mobile') {
    return (
      <div className={`h-full`}>
        <ResponsiveMenu>
          <SettingsSidebar />
        </ResponsiveMenu>

        {children}
      </div>
    )
  } else {
    return (
      <div className={`grid grid-cols-[26rem_1fr] h-full`}>
        <SettingsSidebar />

        {children}
      </div>
    )
  }
}

export default LayoutSettings
