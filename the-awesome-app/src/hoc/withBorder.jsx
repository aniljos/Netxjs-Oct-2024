//HOC
// recevies the component
export function withBorder(Component) {
  //return a new component
  return function WithBorderHOC(props) {
    return (
      <div style={{border: "2px solid blue", margin: "4px", padding: "4px"}}>
            <Component {...props} />
      </div>
    );
  };
}
