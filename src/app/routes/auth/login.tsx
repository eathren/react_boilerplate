'use client'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Label } from '@radix-ui/react-label'
import { LandingLayout } from '@/components/layouts/landing-layout'

export const LoginRoute = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
  }

  // const loginFormSchema = z.object({
  //   email: z.string().email({
  //     message: 'Invalid email address.',
  //   }),
  //   password: z.string().min(6, {
  //     message: 'Password must be at least 6 characters.',
  //   }),
  // })

  return (
    <LandingLayout>
      <Card className="mx-auto max-w-sm ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                {...register('email')}
              />
              {errors.password && (
                <span>{errors.password && <>{errors.password.message}</>}</span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                {...register('password')}
              />
              {errors.password && (
                <span>{errors.password && <>{errors.password.message}</>}</span>
              )}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </LandingLayout>
  )
}
