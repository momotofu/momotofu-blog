import React from "react";
import Section from "./section"
require('./index.styl');


export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="BlogPost-container">
        <Section
          headingCopy={"Abstact"}
          bodyCopy={"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper."}
         />
        <Section
          headingCopy={"#2"}
          bodyCopy={"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper."}
         />
      </div>
    );
  }
};