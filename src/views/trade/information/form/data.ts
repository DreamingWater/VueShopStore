import { FormSchema } from '/@/components/Form';
import { ref } from 'vue';

let citiesOptions = ref([]);
const colProps = {
  span: 16,
};
const countryOptions = [
  {
    id: 'American',
    label: 'American',
    value: '1',
    key: '1',
  },
  {
    id: 'China',
    label: 'China',
    value: '2',
    key: '2',
  },
];
const StateOptionsData = {
  American: [
    { label: 'Alabama', value: 'Alabama', key: 'AL' },
    { label: 'Alaska', value: 'Alaska', key: 'AK' },
    { label: 'Arizona', value: 'Arizona', key: 'AZ' },
    { label: 'Arkansas', value: 'Arkansas', key: 'AR' },
    { label: 'California', value: 'California', key: 'CA' },
    { label: 'Colorado', value: 'Colorado', key: 'CO' },
    { label: 'Connecticut', value: 'Connecticut', key: 'CT' },
    { label: 'Delaware', value: 'Delaware', key: 'DE' },
    { label: 'District of Columbia', value: 'District of Columbia', key: 'DC' },
    { label: 'Florida', value: 'Florida', key: 'FL' },
    { label: 'Georgia', value: 'Georgia', key: 'GA' },
    { label: 'Hawaii', value: 'Hawaii', key: 'HI' },
    { label: 'Idaho', value: 'Idaho', key: 'ID' },
    { label: 'Illinois', value: 'Illinois', key: 'IL' },
    { label: 'Indiana', value: 'Indiana', key: 'IN' },
    { label: 'Iowa', value: 'Iowa', key: 'IA' },
    { label: 'Kansas', value: 'Kansas', key: 'KS' },
    { label: 'Kentucky', value: 'Kentucky', key: 'KY' },
    { label: 'Louisiana', value: 'Louisiana', key: 'LA' },
    { label: 'Maine', value: 'Maine', key: 'ME' },
    { label: 'Maryland', value: 'Maryland', key: 'MD' },
    { label: 'Massachusetts', value: 'Massachusetts', key: 'MA' },
    { label: 'Michigan', value: 'Michigan', key: 'MI' },
    { label: 'Minnesota', value: 'Minnesota', key: 'MN' },
    { label: 'Mississippi', value: 'Mississippi', key: 'MS' },
    { label: 'Missouri', value: 'Missouri', key: 'MO' },
    { label: 'Montana', value: 'Montana', key: 'MT' },
    { label: 'Nebraska', value: 'Nebraska', key: 'NE' },
    { label: 'Nevada', value: 'Nevada', key: 'NV' },
    { label: 'New Hampshire', value: 'New Hampshire', key: 'NH' },
    { label: 'New Jersey', value: 'New Jersey', key: 'NJ' },
    { label: 'New Mexico', value: 'New Mexico', key: 'NM' },
    { label: 'New York', value: 'New York', key: 'NY' },
    { label: 'North Carolina', value: 'North Carolina', key: 'NC' },
    { label: 'North Dakota', value: 'North Dakota', key: 'ND' },
    { label: 'Ohio', value: 'Ohio', key: 'OH' },
    { label: 'Oklahoma', value: 'Oklahoma', key: 'OK' },
    { label: 'Oregon', value: 'Oregon', key: 'OR' },
    { label: 'Pennsylvania', value: 'Pennsylvania', key: 'PA' },
    { label: 'Rhode Island', value: 'Rhode Island', key: 'RI' },
    { label: 'South Carolina', value: 'South Carolina', key: 'SC' },
    { label: 'South Dakota', value: 'South Dakota', key: 'SD' },
    { label: 'Tennessee', value: 'Tennessee', key: 'TN' },
    { label: 'Texas', value: 'Texas', key: 'TX' },
    { label: 'Utah', value: 'Utah', key: 'UT' },
    { label: 'Vermont', value: 'Vermont', key: 'VT' },
    { label: 'Virginia', value: 'Virginia', key: 'VA' },
    { label: 'Washington', value: 'Washington', key: 'WA' },
    { label: 'West Virginia', value: 'West Virginia', key: 'WV' },
    { label: 'Wisconsin', value: 'Wisconsin', key: 'WI' },
    { label: 'Wyoming', value: 'Wyoming', key: 'WY' },
  ],
  China: [
    {
      label: '南京市',
      value: '1',
      key: '1',
    },
    {
      label: '无锡市',
      value: '2',
      key: '2',
    },
    {
      label: '苏州市',
      value: '3',
      key: '3',
    },
  ],
};
export const schemas: FormSchema[] = [
  {
    field: 'fullname',
    component: 'Input',
    label: 'Full Name',
    colProps,
    componentProps: {
      placeholder: 'full name',
    },
    required: true,
  },
  {
    field: 'phone',
    component: 'Input',
    label: 'Phone',
    colProps,
    required: true,
    rules: [
      { required: true, message: 'Phone Number is required', trigger: 'blur' },
      { pattern: /^\d+$/, message: 'Invalid Phone Number', trigger: 'blur' },
    ],
  },
  {
    field: 'email',
    component: 'Input',
    colProps,
    label: 'Email Address',
    helpMessage: 'email address',
    required: true,
    componentProps: {
      placeholder: 'Email address',
    },
    rules: [
      { required: true, message: 'Email is required', trigger: 'blur' },
      { type: 'email', message: 'Invalid Email', trigger: 'blur' },
    ],
  },
  {
    field: 'country',
    component: 'Select',
    label: 'Country',
    required: true,
    colProps: {
      span: 10,
    },
    componentProps: ({ formModel, formActionType }) => {
      return {
        options: countryOptions,
        placeholder: 'country',
        onChange: (e: any) => {
          const option_index = e - 1;
          citiesOptions.value = StateOptionsData[countryOptions[option_index].id];
          window.console.log(citiesOptions.value);
          if (option_index < 0 || e === undefined) {
            citiesOptions.value = [];
          }
          formModel.state = undefined; // reset state value
          const { updateSchema } = formActionType;
          updateSchema({
            field: 'state',
            componentProps: {
              options: citiesOptions.value as [],
            },
          });
        },
      };
    },
  },
  {
    field: 'state',
    component: 'Select',
    label: 'State',
    required: true,
    colProps: {
      span: 10,
    },
    componentProps: {
      options: citiesOptions.value, // defalut []
      placeholder: 'state/city',
    },
  },
  {
    field: 'address',
    component: 'Input',
    label: 'Address',
    colProps,
    componentProps: {
      placeholder: 'Please input your address.',
    },
    required: true,
  },
];
