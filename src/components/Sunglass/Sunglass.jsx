
import './Sunglass.css';
import Watch from '../Watch/Watch';
import { add, multiply } from '../../Utils/Calculate';
const Sunglass = () => {

    const first = 55 ;
    const second = 199;
    const sum = add(first, second);
    const mult = multiply (first, second);

    console.log (sum, mult)

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;