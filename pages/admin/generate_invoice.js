import AdminLayout from '../../shared/AdminLayout/AdminLayout'

const generate_invoice = () => {
  return (
    <div></div>
  )
}

generate_invoice.getLayout = function GetLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}


export default generate_invoice