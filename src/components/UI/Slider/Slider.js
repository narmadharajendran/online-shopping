import React from 'react';
import { withStyles , makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import sliderClasses from './Slider.module.css'
const useStyles = makeStyles({
    root: {
        width: 270,
    },
});

const PrettoSlider = withStyles({
    root: {
        marginLefteft:13,
        color: '#ccced2'
    },
    thumb: {
        height: 22,
        width: 22,
        backgroundColor: '#f0f1f3',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},

    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 200]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.filterbyprice(value[0],value[1])

    };
    return (
        <div >
            <Typography id="pretto-slider" gutterBottom>
                FILTER BY PRICE
            </Typography>
            <div className={sliderClasses.slider}>
            <PrettoSlider
                 aria-labelledby="pretto-slider" defaultValue={[0,200]}
                onChange={handleChange}
                max={1000}
                min={0}
                 />
            </div>
            <div className={sliderClasses.priceDetails}>
                <div className={sliderClasses.filter}>Filter</div>
                <p className='mb-0 ml-auto'>price:${value[0]} - ${value[1]}</p>
            </div>

        </div>
    );
}