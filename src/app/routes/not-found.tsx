import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export const NotFoundRoute = () => {
  return (
    <div className="mt-52 flex flex-col space-y-1 items-center font-semibold">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" replace>
        <Button>Go to Home</Button>
      </Link>
    </div>
  )
}
