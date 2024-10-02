import { object, string } from 'zod'

export const signInSchema = object({
  email: string({ required_error: 'Ingresa un correo electrónico.' })
    .min(1, 'Ingresa un correo electrónico.')
    .email('Ingresa un correo electrónico válido.'),
  password: string({ required_error: 'Ingresa una contraseña.' })
    .min(1, 'Ingresa una contraseña.')
    .min(8, 'La contraseña debe tener más de 8 caracteres.')
    .max(32, 'La contraseña debe tener menos de 32 caracteres.'),
})

export const signUpSchema = object({
  name: string({ required_error: 'Ingresa un nombre.' })
    .min(1, 'Ingresa un nombre.')
    .max(50, 'El nombre debe tener menos de 50 caracteres.'),
  email: string({ required_error: 'Ingresa un correo electrónico.' })
    .min(1, 'Ingresa un correo electrónico.')
    .email('Ingresa un correo electrónico válido.'),
  password: string({ required_error: 'Ingresa una contraseña.' })
    .min(1, 'Ingresa una contraseña.')
    .min(8, 'La contraseña debe tener más de 8 caracteres.')
    .max(32, 'La contraseña debe tener menos de 32 caracteres.'),
  confirmPassword: string({ required_error: 'Confirma la contraseña.' })
    .min(1, 'Confirma la contraseña.')
    .min(8, 'La contraseña debe tener más de 8 caracteres.')
    .max(32, 'La contraseña debe tener menos de 32 caracteres.'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden.',
  path: ['confirmPassword'],
})
