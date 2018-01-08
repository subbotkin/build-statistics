import { connect } from 'react-redux'
import { fetchBuilds } from './actions'
import Counter from './Counter'

const mapStateToProps = state => {
  return {
    buildTime: state.builds.buildTime,
    isFetching: state.builds.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onComponentDidMount: () => {
      dispatch(fetchBuilds('0'))
    }
  }
}

const BuildTimeCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default BuildTimeCounter
