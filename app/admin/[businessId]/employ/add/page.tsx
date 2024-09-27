import EmployeeForm from '@/components/admin/employee-form'
import Header from '@/components/products/head-container'

export default function page() {
  return (
    <div>
      <Header title="Crear cuenta de empleado" />
      <EmployeeForm />
    </div>
  )
}
