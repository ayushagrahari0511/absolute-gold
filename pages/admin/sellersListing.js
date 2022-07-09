import AdminLayout from "../../shared/AdminLayout/AdminLayout"

const sellersListing = () => {
  return (
    <div></div>
  )
}

sellersListing.getLayout = function GetLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}


export default sellersListing