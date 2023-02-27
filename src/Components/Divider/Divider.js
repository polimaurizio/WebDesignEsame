import classNames from "classnames";
import '../../App.css'

const Divider = ({variant, className}) => {

    return (
        <div className={'line h-[1px] w-[0px] bg-black'}></div>
    );
}

export const DividerVariant = {
    Primary: 'Primary',
    Secondary: 'Secondary',
};

export default Divider;
