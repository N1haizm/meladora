import * as yup from 'yup';

const validations = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email('Email düzgün deyil').required('Email mütləqdir')
});

export default validations;