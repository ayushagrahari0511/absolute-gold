import AdminLayout from "../../shared/AdminLayout/AdminLayout"

const membership = () => {
  return (
    <div></div>
  )
}

membership.getLayout = function GetLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}


export default membership