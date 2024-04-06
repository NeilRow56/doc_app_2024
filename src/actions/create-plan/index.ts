'use server'

import bcryptjs from 'bcryptjs'

import * as z from 'zod'

import { db } from '@/lib/db'

import { getDoctorByEmail } from '@/data/doctor'
import { CreatePlanSchema } from '@/schemas'

export const plan = async (values: z.infer<typeof CreatePlanSchema>) => {
  const validatedFields = CreatePlanSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, password, phone, firstName, lastName } = validatedFields.data

  const hashedPassword = await bcryptjs.hash(password, 12)

  //check if user already exists

  const existingDoctor = await getDoctorByEmail(email)

  if (existingDoctor) {
    return {
      data: null,
      error: 'This email is already in use',
      status: 409,
    }
  }

  await db.doctor.create({
    data: {
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
    },
  })

  return { success: 'Registration successful!' }
}
