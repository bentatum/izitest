
import React from 'react'
import moment from 'moment'
import { get } from 'lodash'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux'
import { getMemorials, sortMemorialsByName } from 'redux/modules/app'

@connect(
  ({ app: { memorials } }) => ({ memorials }),
  { getMemorials, sortMemorialsByName }
)
export default class App extends React.Component {

  componentDidMount () {
    this.props.getMemorials()
  }

  render () {
    return (
      <div>
        {this.props.memorials.map((memorial, key) =>
          <Flex key={key} justify='space-between'>
            <Box>
              {get(memorial.name, 'first')} {get(memorial.name, 'middle')} {get(memorial.name, 'last')}
            </Box>
            <Box>
              {moment(memorial.creationDate).format('MM/DD/YY')}
            </Box>
          </Flex>
        )}
        <button onClick={this.props.sortMemorialsByName}>
          Sort by name
        </button>
      </div>
    )
  }
}
