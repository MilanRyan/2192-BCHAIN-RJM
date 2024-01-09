import React from 'react';
import ChildComponent from './childcomponent';

// import { render } from 'react-dom/cjs/react-dom.production.min';

// function ParentComponent() {
//     const dataToPass = "Hello from parent";
//     return(
//         <ChildComponent message={dataToPass} />
//     );
// }

// export default ParentComponent;

class ParentComponent extends React.Component {
    render() {
        const dataToPass = "Hello from parent!";
        return(
            <div>
                <ChildComponent message={dataToPass} />
            </div>
        )
    }
}

export default ParentComponent;