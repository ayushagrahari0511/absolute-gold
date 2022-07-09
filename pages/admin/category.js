import AdminLayout from "../../shared/AdminLayout/AdminLayout"

const category = () => {
  return (
    <div></div>
  )
}

category.getLayout = function GetLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}


export default category