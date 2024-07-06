import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld5 from './components/HelloWorld5'
import HelloWorld6 from './components/helloworld6/HelloWorld6'
const App: React.FC = () => {
return (
<>
<div className="bg-indigo-100 h-48 flex justify-center items-center">
<HelloWorld />
</div>
<div className="bg-red-100 h-48 flex justify-center items-center">
<HelloWorld2 />
</div>
<div className="bg-indigo-100 h-48 flex justify-center items-center">
<div className='bg-yellow-100 flex h-full w-full p-6'>
<HelloWorld3 name="Mary" />
</div>
<div className='bg-green-100 h-full w-full p-6'>
<HelloWorld4 />
</div>
</div>
<div>
<HelloWorld5 />
</div>
<div>
<HelloWorld6 />
</div>
</>
);
}
export default App;