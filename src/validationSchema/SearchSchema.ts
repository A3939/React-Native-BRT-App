// App.js
import * as yup from 'yup';

export const SearchValidationSchema = yup.object().shape({
    startStation: yup
    .string()
    .required('* Please Enter start point'),
    endStation: yup
    .string()
    .required('* Please Enter end point'),
});
