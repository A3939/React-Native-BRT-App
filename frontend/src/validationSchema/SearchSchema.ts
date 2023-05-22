// App.js
import * as yup from 'yup'

export const SearchValidationSchema = yup.object().shape({
    startStation: yup
    .string()
    .required('* Kaha se jane he vo to batao'),
    endStation: yup
    .string()
    .required('* Kaha jane he vo bhi batao ab'),
});
