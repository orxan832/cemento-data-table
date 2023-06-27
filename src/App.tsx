import Table from "./components/table"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

// All tasks have been completed except one. I really didn't understand group rows by its main column. I know what is the row grouping. But the info about this (I think) a little bit insufficient.
const App = () => {

  return (
    <div className="mt-20 w-3/4 mx-auto flex flex-col space-y-2">
      <Table />
      <ToastContainer position="top-right" />
    </div>
  )
}

export default App