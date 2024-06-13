import { Header } from '../ui/header'

type LayoutProps = {
  children: React.ReactNode
}
export const LandingLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] m-auto mt-52">{children}</main>
    </>
  )
}
