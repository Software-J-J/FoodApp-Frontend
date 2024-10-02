'use client'

import { useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ErrorMessage from '@/components/shared/error-message'
import { Form } from '@/components/ui/form'

export default function SignIn() {
  const [globalError, setGlobalError] = useState<string>('')
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Bienvenido
          </CardTitle>
        </CardHeader>
        <CardContent>
          {globalError && <ErrorMessage error={globalError} />}
          <Form>
            <form
              onSubmit={() => console.log('submited')}
              className="space-y-8"
            ></form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
