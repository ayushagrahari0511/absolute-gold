import AdminLayout from '../../shared/AdminLayout/AdminLayout'

const media_management = () => {
  return (
    <div></div>
  )
}

media_management.getLayout = function GetLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}


export default media_management