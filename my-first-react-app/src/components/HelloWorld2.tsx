import React from 'react';
type Props = {
name?: string; //the question mark means that this is optional
other?: string; //the question mark means that this is optional
}
const HelloWorld2: React.FC<Props> = ({name = "John"}) => {
return (
<>
<p>Hello {name}. Greetings from React with TypeScript</p>
</>
)
}
//Below used to be the way to set default but defaultProps is now deprecated.
/*HelloWorld2.defaultProps = {
name: "John"
}*/
export default HelloWorld2;