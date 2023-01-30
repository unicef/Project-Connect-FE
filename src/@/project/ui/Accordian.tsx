import React, { Component
} from 'react';

import '~/assets/styles/accordian.scss';
interface Accordianprops {
  activeDefault?: any;
  children:any
}

interface Accordianstate {
  active?: any;
}
export const Toggle = (props: any) => (

  <div className="toggable">
    <div className="toggable_heading" onClick={props.setActive}>
      { props.data.question }
    </div>
    { 
      props && props.active ? (
        <div className="toggable_content">
          { props.children }
        </div>
      ) : null
    }
  </div>
)

export class Accordion extends Component<Accordianprops, Accordianstate> {

  constructor(props:any) {
    super(props);
    this.state = {
      active: this.props.activeDefault
    }
  }

  setActive = (i:any) => {
    this.setState(oldState => ({
        active: oldState.active === i ? null : i
    }))
  }

  render() {
    const children = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        active: this.state.active == i,
        setActive: () => this.setActive(i)
      })
    })
    return (
      <div className="accordion">
        { children }
      </div>
    )
  }
}