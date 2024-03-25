import TopBar from '@/components/layout/Topbar'

function LayoutApplication({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col">
      <TopBar />
      {children}
    </div>
  )
}

export default LayoutApplication
