import { LandingLayout } from '@/components/layouts/landing-layout'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export const LandingRoute = () => {
  const navigate = useNavigate()
  return (
    <LandingLayout>
      <div className="flex flex-col ">
        <div className="flex-grow m-auto px-4">
          <div className="text-center h-52 ">
            <h1 className="text-4xl font-bold mb-4">Landing Page</h1>
            <h2 className="text-2xl mb-6">With subtext.</h2>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Dynamic Updates</h3>
            <p className="text-lg mb-4">
              Experience the future of project management with{' '}
              <b>dynamic, real-time updates.</b> Keep your team aligned and
              projects on track with our cutting-edge tools.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              Seamless Collaboration
            </h3>
            <p className="text-lg mb-4">
              Seamlessly create and share notes with your team. Our platform
              ensures that everyone stays informed and collaborative, no matter
              where they are.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Data-driven Insights</h3>
            <p className="text-lg mb-4">
              Harness the power of data with our robust analytics features. Gain
              insights, track progress, and make informed decisions to drive
              your projects forward.
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <Button onClick={() => navigate('/auth/signup')}>
            Try two weeks for free
          </Button>
        </div>
      </div>
    </LandingLayout>
  )
}
