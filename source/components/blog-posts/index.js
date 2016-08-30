import React from 'react'
import BlogPost from '../blog-post'

var BLOGPOSTDATA = require('../../../api/blog-posts.json')

var BlogPosts = React.createClass({
  componnentWillMount: function() {
    this.setState({navigationBarMeta: BLOGPOSTDATA[0].meta})
  },
  getNavigationBarMeta: function(POSTMETADATA) {
    this.setState({ navigationBarMeta: POSTMETADATA })
  },
  render: function() {
    return (
      <div>
        {BLOGPOSTDATA.map((POSTDATA, i) => {
          var isLast = i === BLOGPOSTDATA.length - 1
          return (
            <BlogPost
              POSTDATA={POSTDATA}
              key={POSTDATA.meta.UUID}
              bubbleMetaData={this.getNavigationBarMeta}
              isLast={isLast}
            />
          )
        })}
      </div>
    )
  }
})

export default BlogPosts