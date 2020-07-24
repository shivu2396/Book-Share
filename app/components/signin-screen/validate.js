import { validate } from 'validate.js';
import { isEmpty } from 'lodash';

var constraints = {
  name: {
    presence: {
      allowEmpty: false,
    },
  },
  length: {
    minimum: 40,
    maximum: 50,
    message: 'Not a valid',
  },
  format: {
    pattern: '[a-zA-Z]+',
    message: 'Not a valid',
  },
  email: {
    presence: {
      allowEmpty: false,
    },
    email: true,
  },
  password: {
    presence: {
      message: 'Cannot be blank.',
    },
    length: {
      minimum: 9,
      messsage: 'must be at least 9 characters',
    },
    format: {
      pattern: '[a-z0-9A-Z]+',
      message: '^Not a valid',
    },
  },
  confirm: {
    presence: { allowEmpty: false },
    equality: {
      attribute: 'password',
    },
  },
  // confirm: {
  //   require: true,
  //   minlength: 6,
  //   equalTo: 'password',
  // },
};

export const Validation = (field, value, extra = {}) => {
  console.log('field, value', field, value);
  let object = new Object();
  object[field] = value;

  if (!isEmpty(extra)) {
    let tempkey = Object.keys(extra);
    let tmpKeyValue = tempkey[0];
    let tempvalue = Object.values(extra);
    let tmpValue = tempvalue[0];
    object[tmpKeyValue] = tmpValue;
    console.log('this is final object with confirm password', object);
  }

  console.log('this is forgot password', object, extra);

  let constraint = new Object();
  constraint[field] = constraints[field];
  console.log(object, constraint);
  const result = validate(object, constraint); //
  console.log('dggddbbbb', result);
  //   if (value != '' && value != null) {
  //     //if null value it will return with the presence validation
  //     emailerror = validate(object, constraint);
  //   }

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[field][0];
    console.log(email);
  }
  return null;
};

// var expname = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]+$/;
// var expemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

// export const Validation = (type, value, extra = '') => {
//   switch (type) {
//     case 'name':
//       if (value.trim != '') {
//         if (expname.test(value) == true) {
//           return null;
//         } else {
//           return 'Please Enter Valid Name';
//         }
//       } else {
//         return 'Name is Blank ';
//       }
//     case 'email':
//       if (value.trim != '') {
//         if (expemail.test(value) == true) {
//           return null;
//         } else {
//           return 'Please Enter Valid Eamil';
//         }
//       } else {
//         return 'Email is Blank ';
//       }
//     case 'password':
//       if (value.trim != '') {
//         if (passw.test(value) == true) {
//           return null;
//         } else {
//           return 'Please enter min 8 charecter,one upper & lower letter and special character';
//         }
//       } else {
//         return 'Password is Blank ';
//       }
//     case 'confirm password':
//       if (value.trim != '') {
//         // if (value.match(extra)) {
//         if (value == extra) {
//           return null;
//         } else {
//           return 'Entered Password doesnot match';
//         }
//       }
//   }
// };
