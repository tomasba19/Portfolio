import { Triangle } from 'react-loader-spinner'
import './Loader.scss'

const Loader = () => {
  return (
    <div className="loader">
      <Triangle
        height="150"
        width="150"
        color="#d00000"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName="loader"
        visible={true}
      />
    </div>
  )
}

export default Loader;