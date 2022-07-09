import AdminLayout from "../../shared/AdminLayout/AdminLayout"

const product_link = () => {
  return (
    <div>product_link</div>
  )
}

product_link.getLayout = function GetLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}


export default product_link