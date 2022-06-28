const validatePhone = phone => {
  const regex_desk = /^\+?([0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const regex_mobile =
    /^\+?([0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3,4})$/;

  return regex_desk.test(phone) || regex_mobile.test(phone);
};

const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validateStrictText = text => {
  const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/g;
  return regex.test(text);
};

const validateText = text => {
  const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9]+$/g;
  return regex.test(text);
};

const validateNumber = text => {
  const regex = /^[0-9]+$/g;
  return regex.test(text);
};

function Exception(val) {
  this.prefix = "[useValidator]";
  this.value = val;
  this.toString = function () {
    return this.prefix + " " + this.value;
  };
}

export default function useValidator() {
  const validators = {
    // Czysty tekst z polskimi znakami
    "strict-text": validateStrictText,
    // Tekst + cyfry
    text: validateText,
    // Cyfry
    number: validateNumber,
    //
    phone: validatePhone,
    //
    email: validateEmail,
  };

  const Validator = (content, r) => {
    let restriction = r.toLowerCase();
    try {
      if (!validators.hasOwnProperty(restriction)) {
        throw new Exception(
          'Nie zdefiniowano restrykcji walidacji "' + r + '"'
        );
      }
      return validators[restriction](content);
    } catch (e) {
      console.warn(e.toString());
    }
  };

  return { Validator };
}
