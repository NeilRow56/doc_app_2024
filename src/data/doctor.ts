import { db } from '@/lib/db'

export const getDoctorByEmail = async (email: string) => {
  try {
    const doctor = await db.doctor.findUnique({ where: { email: email } })

    return doctor
  } catch {
    return null
  }
}

export const getDoctorById = async (id: string) => {
  try {
    const doctor = await db.doctor.findUnique({ where: { id } })

    return doctor
  } catch {
    return null
  }
}
