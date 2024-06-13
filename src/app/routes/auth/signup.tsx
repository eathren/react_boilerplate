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

export const SignupRoute = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  // const signupFormSchema = z.object({
  //   email: z.string().email({
  //     message: 'Invalid email address.',
  //   }),
  //   password: z.string().min(6, {
  //     message: 'Password must be at least 6 characters.',
  //   }),
  //   confirmPassword: z
  //     .string()
  //     .min(6, {
  //       message: 'Password must be at least 6 characters.',
  //     })
  //     .refine((data) => data === watch('password'), {
  //       message: 'Passwords do not match.',
  //     }),
  // })

  return (
    <LandingLayout>
      <Card className="mx-auto max-w-sm ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>
            Create an account by providing your email and password
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
              {errors.email && (
                <span>{errors.email && <>{errors.email.message}</>}</span>
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
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <span>
                  {errors.confirmPassword && (
                    <>{errors.confirmPassword.message}</>
                  )}
                </span>
              )}
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </LandingLayout>
  )
}
