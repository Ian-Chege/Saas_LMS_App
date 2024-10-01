"use client"

import { FormGenerator } from "@/components/global/form-generator"
import { Loader } from "@/components/global/loader"
import { Button } from "@/components/ui/button"
import { GROUPLE_CONSTANTS } from "@/constants"
import { useAuthSignIn } from "@/hooks/auth"

export const SignInForm = () => {
  const { isPending, onAuthenticateUser, register, errors } = useAuthSignIn()
  return (
    <form onSubmit={onAuthenticateUser} className="flex flex-col gap-3 mt-8">
      {GROUPLE_CONSTANTS.signInForm.map((field) => (
        <FormGenerator
          key={field.id}
          register={register}
          errors={errors}
          {...field}
        />
      ))}
      <Button type="submit" className="rounded-2xl">
        <Loader loading={isPending}>Sign in with Email</Loader>
      </Button>
    </form>
  )
}
