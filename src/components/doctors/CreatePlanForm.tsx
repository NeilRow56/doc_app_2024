'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useTransition } from 'react'
import { toast } from 'sonner'
// import { passwordStrength } from 'check-password-strength'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Globe, Loader2, LogIn, MailIcon, Phone } from 'lucide-react'
import { CreatePlanSchema } from '@/schemas'
import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'

import { PasswordInput } from '../frontend/auth/PasswordInput'
import { plan } from '@/actions/create-plan'

export const CreatePlanForm = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<z.infer<typeof CreatePlanSchema>>({
    resolver: zodResolver(CreatePlanSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (values: z.infer<typeof CreatePlanSchema>) => {
    startTransition(() => {
      plan(values)
        .then((data) => {
          if (data?.error) {
            form.reset()
            toast.error(data.error)
          }

          if (data?.success) {
            form.reset()
            toast.success(data.success)
            router.push('/dashboard')
          }
        })
        .catch(() => toast.error('Something went wrong'))
    })
  }

  return (
    <div className="rounded-lg border border-red-600 p-6">
      <div className="boder-2 w-[600px] rounded-lg border-slate-200">
        <Form {...form}>
          <form
            className="gap-3 space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className=" grid gap-3  sm:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">First Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John "
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Doe"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="777777666"
                        disabled={isPending}
                        type="text"
                        suffix={<Phone />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john.doe@example.com"
                        disabled={isPending}
                        type="email"
                        suffix={<MailIcon />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        placeholder="******"
                        disabled={isPending}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">
                      {' '}
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="******"
                        type="password"
                        suffix={<Globe />}
                        disabled={isPending}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="max-w-[150px]"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4" /> Processing
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" /> Register
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
